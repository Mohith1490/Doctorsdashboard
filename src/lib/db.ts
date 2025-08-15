import { UserRole } from "@/type/types"
import { MongoClient, ServerApiVersion, Db, Collection, ObjectId } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error('Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

// Global MongoClient for dev to avoid multiple connections
let client: MongoClient
if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient
  }

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options)
  }

  client = globalWithMongo._mongoClient
} else {
  client = new MongoClient(uri, options)
}

// Ensure one DB instance
let dbInstance: Db | null = null

export async function getDB(): Promise<Db> {
  if (!dbInstance) {
    await client.connect()
    dbInstance = client.db() // Uses default DB from connection string
  }
  return dbInstance
}

// Optional: define your collection types
export type User = {
  _id?: ObjectId
  email: string
  emailVerified?: Date
  name?: string
  image?: string
  password?: string
  role?: UserRole
}

export type Account = {
  _id: ObjectId
  userId: ObjectId
  provider: string
  providerAccountId: string
}

export type VerificationToken ={
  id?: ObjectId
  email: string
  token: string
  expires: Date
}
export type PasswordResetToken = {
  id: ObjectId
  email: string
  token: string
  expires: Date
}


// Lazy-load collections and export them
let collectionsCache: {
  users: Collection<User>
  accounts: Collection<Account>
  verificationtoken: Collection<VerificationToken>
  passwordresettoken: Collection<PasswordResetToken>
} | null = null

export async function getCollections() {
  if (!collectionsCache) {
    const db = await getDB()
    collectionsCache = {
      users: db.collection<User>("users"),
      accounts: db.collection<Account>("accounts"),
      verificationtoken: db.collection<VerificationToken>("verificationtoken"),
      passwordresettoken: db.collection<PasswordResetToken>("passwordresettoken")
    }
  }
  return collectionsCache
}

// Optional: export the client (for MongoDBAdapter)
export default client

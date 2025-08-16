import { currentUser } from "@/lib/auth"


export default async function Doctor(){
    const user = await currentUser()
    return(
        <>
         <div>
            <h1 className="text-4xl font-bold" >Welcome back  {user?.name}</h1>
         </div>
        </>
    )
}
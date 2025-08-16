"use server"


const base_url = process.env.BACKEND_BASE_URL
export default async function getAllDoctors() {
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json"
        },
        cache: "no-cache"
    }

    try {
        const response = fetch(`${base_url}/api/adddoctor`, options).then(res => res.json());
        const result = await response
        
        if (result.ok) {
            return {
                success: false,
                message: "Something went wrong"
            }
        }
        return {
            success: true,
            message: "Data fetched successfully",
            data:result.data
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error
        }
    }
}
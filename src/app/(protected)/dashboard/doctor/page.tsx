import DoctorsPage from "@/components/pages/DoctorsPage"
import { DoctorsPersonalAppointments } from "@/components/tables/doctorPersonalAppointmentstable"
import { currentUser } from "@/lib/auth"


export default async function Doctor(){
    const user = await currentUser()
    return(
        <>
         <DoctorsPage columns={DoctorsPersonalAppointments} />
        </>
    )
}
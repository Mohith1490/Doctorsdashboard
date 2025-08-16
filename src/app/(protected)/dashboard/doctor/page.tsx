import DoctorsPage from "@/components/pages/DoctorsPage"
import { DoctorsPersonalAppointments } from "@/components/tables/doctorPersonalAppointmentstable"


export default async function Doctor(){
    return(
        <>
         <DoctorsPage columns={DoctorsPersonalAppointments} />
        </>
    )
}
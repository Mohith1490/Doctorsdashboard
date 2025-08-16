import AllDoctorsPage from "@/components/pages/AllDoctorsPage";
import { DoctorsListColumn } from "@/components/tables/doctorslisttable";


export default function AllDoctors(){
    return(
        <>
         <AllDoctorsPage columns={DoctorsListColumn}/>
        </>
    )
}
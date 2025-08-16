"use client"
import { slotBookingZodType } from "@/type/schema";
import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DoctorsPersonalDataTable } from "../tables/DoctorsPersonalDatatable";
import { useGetAllAppointments } from "@/data/appointment/get-all-appointments";
import { useSession } from "next-auth/react";


interface ColumnDataType<
  TData extends slotBookingZodType
> {
  columns: ColumnDef<TData>[];
}


export default function DoctorsPage({ columns }: ColumnDataType<slotBookingZodType>) {
  const {data:session} = useSession()
  const {data: DoctorsDetail,isLoading,isError} = useGetAllAppointments();
  if(isLoading){
    return (
      <>
       <div>Loading...</div>
      </>
    )
  }
  if(isError){
    return(
      <>
      <div>
        Error
      </div>
      </>
    )
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row justify-start items-center gap-2">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-3xl font-bold" >Welcome back {session?.user?.name} </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <DoctorsPersonalDataTable columns={columns} data={DoctorsDetail?.data ?? []} />
        </CardContent>
      </Card>
    </>
  )
}
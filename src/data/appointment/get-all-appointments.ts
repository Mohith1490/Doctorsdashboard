"use client"
import getAllAppointments from "@/actions/appointments/get-all-appointments";
import { useQuery } from "@tanstack/react-query";


export function useGetAllAppointments(){
    return useQuery({
        queryKey:["getAllAppointments"],
        queryFn:async () => await getAllAppointments()
    })
}
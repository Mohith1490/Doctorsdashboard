"use client"
import getAllDoctors from "@/actions/addDoctors/get-all-doctors";
import { useQuery } from "@tanstack/react-query";


export function useGetAllDoctors(){
    return useQuery({
        queryKey:["getAllDoctors"],
        queryFn:async () => await getAllDoctors()
    })
}
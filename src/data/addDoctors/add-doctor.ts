"use client"
import addDoctor from "@/actions/addDoctors/add-doctor";
import { DoctorsformType } from "@/type/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type onSuccessDataType = {
    success: boolean;
    message: string;
}

export default function useAddDoctor() {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn: async (values: DoctorsformType) => addDoctor(values) ,
        onSuccess: (data: onSuccessDataType) => {
            if (!data.success) {
                toast.error("Something went wrong", { description: data.message })
            }
            toast.success("Doctor added", { description: data.message })
            queryclient.invalidateQueries({queryKey:["getAllDoctors"]})
            return data;    
        },
        onError: (error) => {
            console.error('Error posting data: on add distributor', error);
        },

    })
}

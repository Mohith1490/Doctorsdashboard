"use client"
import addAppointments from "@/actions/appointments/book-appointment";
import { slotBookingZodType } from "@/type/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type onSuccessDataType = {
    success: boolean;
    message: string;
}

export default function useBookAppointment() {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn: async (values: slotBookingZodType) => await addAppointments(values) ,
        onSuccess: (data: onSuccessDataType) => {
            if (!data.success) {
                toast.error("Something went wrong", { description: data.message })
            }
            toast.success("Added Appointment", { description: data.message })
            queryclient.invalidateQueries({queryKey:["getAllAppointments"]})
            queryclient.invalidateQueries({queryKey:["getPersonalAppointments"]})
            return data;    
        },
        onError: (error) => {
            console.error('Error posting data: on add distributor', error);
        },

    })
}

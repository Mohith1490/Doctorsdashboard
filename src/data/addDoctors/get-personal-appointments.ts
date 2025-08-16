import { useQuery } from "@tanstack/react-query";
import getPersonalAppointments from "@/actions/addDoctors/get-personal-appointments";

export function useGetPersonalAppointments(id: string) {
  return useQuery({
    queryKey: ["getPersonalAppointments", id],
    queryFn: () => getPersonalAppointments(id),
    enabled: !!id,
  });
}

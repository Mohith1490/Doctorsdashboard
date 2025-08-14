import { slotBookingZodType } from "@/type/schema";
import AppointmentBookingForm from "../forms/appointmentbookingform";
import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AppointmentDataTable } from "../tables/Appoinmentsdatatable";


interface ColumnDataType<
  TData extends slotBookingZodType
> {
  columns: ColumnDef<TData>[];
}


export default function SlotBookingPage({ columns }: ColumnDataType<slotBookingZodType>) {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row justify-start items-center gap-2">
          <div className="flex flex-col gap-2">
            <CardTitle>Appointments</CardTitle>
            <CardDescription>
              Manage all your appointments.
            </CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <AppointmentBookingForm />
          </div>
        </CardHeader>
        <CardContent>
          <AppointmentDataTable columns={columns} data={appointments ?? []} />
        </CardContent>
      </Card>
    </>
  )
}


export const appointments = [
  {
    name: "Aarav Sharma",
    location: "Delhi",
    category: "Dentist",
    age: 29,
    phonenumber: 9876543210,
    date: new Date("2025-08-15T00:00:00.000Z"),
    time: "10:30 AM",
    email: "aarav.sharma@example.com",
    note: "nothing",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    category: "Dermatologist",
    age: 34,
    phonenumber: 9123456780,
    date: new Date("2025-08-16T00:00:00.000Z"),
    time: "2:00 PM",
    email: "priya.mehta@example.com",
    note: "nothing",
  },
  {
    name: "Rohan Verma",
    location: "Bangalore",
    category: "Cardiologist",
    age: 45,
    phonenumber: 9812345678,
    date: new Date("2025-08-17T00:00:00.000Z"),
    time: "4:15 PM",
    email: "rohan.verma@example.com",
    note: "nothing",
  },
  {
    name: "Isha Kapoor",
    location: "Hyderabad",
    category: "Pediatrician",
    age: 31,
    phonenumber: 9098765432,
    date: new Date("2025-08-18T00:00:00.000Z"),
    time: "9:45 AM",
    email: "isha.kapoor@example.com",
    note: "nothing",
  },
  {
    name: "Karan Singh",
    location: "Chennai",
    category: "Orthopedic",
    age: 38,
    phonenumber: 9001234567,
    date: new Date("2025-08-19T00:00:00.000Z"),
    time: "1:30 PM",
    email: "karan.singh@example.com",
    note: "nothing",
  },
  {
    name: "Neha Reddy",
    location: "Pune",
    category: "Neurologist",
    age: 42,
    phonenumber: 9876012345,
    date: new Date("2025-08-20T00:00:00.000Z"),
    time: "11:15 AM",
    email: "neha.reddy@example.com",
    note: "nothing",
  },
  {
    name: "Aditya Malhotra",
    location: "Kolkata",
    category: "ENT Specialist",
    age: 27,
    phonenumber: 9887766554,
    date: new Date("2025-08-21T00:00:00.000Z"),
    time: "3:00 PM",
    email: "aditya.malhotra@example.com",
    note: "nothing",
  },
  {
    name: "Simran Kaur",
    location: "Ahmedabad",
    category: "Gynecologist",
    age: 36,
    phonenumber: 9012345678,
    date: new Date("2025-08-22T00:00:00.000Z"),
    time: "5:45 PM",
    email: "simran.kaur@example.com",
    note: "nothing",
  },
  {
    name: "Vikram Joshi",
    location: "Jaipur",
    category: "Psychiatrist",
    age: 40,
    phonenumber: 9023456789,
    date: new Date("2025-08-23T00:00:00.000Z"),
    time: "8:30 AM",
    email: "vikram.joshi@example.com",
    note: "nothing",
  },
  {
    name: "Ananya Das",
    location: "Lucknow",
    category: "Oncologist",
    age: 33,
    phonenumber: 9345678901,
    date: new Date("2025-08-24T00:00:00.000Z"),
    time: "12:00 PM",
    email: "ananya.das@example.com",
    note: "nothing",
  }
];

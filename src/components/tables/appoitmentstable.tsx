"use client";

import { slotBookingZodType } from "@/type/schema";
import { ColumnDef } from "@tanstack/react-table";

export const AppointmentBookingColumn: ColumnDef<slotBookingZodType>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => row.getValue("name"),
  },
  {
    accessorKey: "location",
    cell: ({ row }) => row.getValue("location"),
  },
  {
    accessorKey: "age",
    cell: ({ row }) => row.getValue("age"),
  },
  {
    accessorKey: "phonenumber",
    cell: ({ row }) => row.getValue("phonenumber"),
  },
  {
    accessorKey: "category",
    cell: ({ row }) => row.getValue("category"),
  },
  {
    accessorKey: "time",
    cell: ({ row }) => row.getValue("time"),
  },
  {
    accessorKey: "date",
    cell: ({ row }) =>{
    const date:Date =   row.getValue("date");
    return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "email",
    cell: ({ row }) => row.getValue("email"),
  },
];

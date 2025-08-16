"use client"
import { slotBookingZodType } from "@/type/schema";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

export const DoctorsPersonalAppointments: ColumnDef<slotBookingZodType>[] = [
  {
    accessorKey: "name",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="Name"  />
    },
    cell: ({ row }) => row.getValue("name"),
  },
  {
    accessorKey: "location",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="Location"  />
    },
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
    accessorKey: "time",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="Time"  />
    },
    cell: ({ row }) => row.original.slot?.time,
  },
  {
    accessorKey: "date",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="date"  />
    },
    cell: ({ row }) =>{
    const date:Date =   row.original.slot?.date;
    return new Date(date).toLocaleDateString();
    },
  },
  {
    accessorKey: "note",
    cell: ({ row }) => row.getValue("note"),
  },
];

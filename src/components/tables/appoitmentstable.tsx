"use client"
import { slotBookingZodType } from "@/type/schema";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

export const AppointmentBookingColumn: ColumnDef<slotBookingZodType>[] = [
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
    accessorKey: "category",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="Category"  />
    },
    cell: ({ row }) => row.getValue("category"),
  },
  {
    accessorKey: "time",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="Time"  />
    },
    cell: ({ row }) => row.original.slot.time,
  },
  {
    accessorKey: "date",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="date"  />
    },
    cell: ({ row }) =>{
    const date:Date =   row.original.slot.date;
    return new Date(date).toLocaleDateString();
    },
  },
  {
    accessorKey: "email",
    cell: ({ row }) => row.original.email,
  },
  {
    accessorKey: "note",
    cell: ({ row }) => row.getValue("note"),
  },
];

"use client"
import { DoctorsformType } from "@/type/schema";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

export const DoctorsListColumn: ColumnDef<DoctorsformType>[] = [
  {
    accessorKey: "name",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="Name"  />
    },
    cell: ({ row }) => row.getValue("name"),
  },
  {
    accessorKey: "email",
    header:({column})=>{
    return  <DataTableColumnHeader column={column} title="Email"  />
    },
    cell: ({ row }) => row.getValue("email"),
  },
  {
    accessorKey: "phonenumber",
    cell: ({ row }) => row.getValue("phonenumber"),
  },
  {
    accessorKey: "specialization",
    cell: ({ row }) => row.getValue("specialization"),
  },
  {
    accessorKey: "bio",
    cell: ({ row }) => row.getValue("bio"),
  },
];

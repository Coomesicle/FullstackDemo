"use client"
import React from "react";
import { TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
const TableRowComponent = ({ row, removeRow }) => {
    
    const handleDelete = async (name) => { 
      console.log(name)
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candy`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          "Name": name,
        })
      }).then((response) => {
        if (response.status == 200) {
          // Everything went well, just remove the element from state
          removeRow(name);
        } else {
          console.log("There was an error with the delete request!");
        }
      })
    }

    return (
        <TableRow>
            <TableCell>{row.Name}</TableCell>
            <TableCell className="font-semibold">{row.Candy}</TableCell>
            <TableCell className="hidden md:table-cell">
                <Badge variant="info">Pending</Badge>
            </TableCell>
            <TableCell className="flex gap-2">
                <Button className="rounded-full" size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <button className="sr-only">Edit</button>
                </Button>
                <Button onClick={() => handleDelete(row.Name)} className="rounded-full" size="icon" variant="ghost">
                  
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default TableRowComponent;



function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}



function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
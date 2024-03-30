"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import TableRowComponent from "@/components/component/TableRowComponent.jsx";
import { useEffect, useState } from "react"

export default function Component() {

  const [rows, setRows] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);


  const removeRow = (name: any) => {
    let newRows = [...rows];
    newRows.splice(newRows.findIndex((el) => el["Name"] == name));
    setRows(newRows);
  }
  const dictToArray = (jsonObj: any) : Array<Object> => {
    return Object.keys(jsonObj).map(key => {
      return { 
        "Name": key,
        "Candy": jsonObj[key],
      }
    })
  }

  const fetchCandies = async () => {
    if (!rows) { 
      await fetch("http://localhost:5000/candy", {
        method:'GET'
      }).then(response => response.json()).then(json => {
        console.log(json);
        setRows(dictToArray(json));
        setLoading(false);
      })
    }


  }
  useEffect(() => {
    fetchCandies();
  }, [])


  if (loading && !rows)
    return (
      <div>Loading</div>
    )
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-14 px-4 border-b lg:h-20 gap-4 dark:border-gray-800">
        <Button className="rounded-full border w-8 h-8 dark:border-gray-800" size="icon" variant="ghost">
          <Package2Icon className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <h1 className="font-semibold text-base lg:text-xl">Candy Requests</h1>
        <Button className="ml-auto lg:ml-2" size="sm">
          Add candy
        </Button>
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-4">
          <div className="flex items-center space-x-4">
            <form className="flex items-center space-x-4">
            </form>
          </div>
          <div className="mt-4 border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Name</TableHead>
                  <TableHead>Requested Candy</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="w-[120px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                { 
                  rows.map((row : any) => (
                    <TableRowComponent row={row} removeRow={removeRow} />
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}


function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}
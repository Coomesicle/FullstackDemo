/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z6WRCHK2NDm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function Component() {
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
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell className="font-semibold">Gummy Bears</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="info">Pending</Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell className="font-semibold">Sour Worms</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="success">Fulfilled</Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mike Johnson</TableCell>
                  <TableCell className="font-semibold">Cotton Candy</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="success">Fulfilled</Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Emily Davis</TableCell>
                  <TableCell className="font-semibold">Chocolate Bar</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="info">Pending</Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Olivia Wilson</TableCell>
                  <TableCell className="font-semibold">Jelly Beans</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="info">Pending</Badge>
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button className="rounded-full" size="icon" variant="ghost">
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}

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


function Package2Icon(props) {
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

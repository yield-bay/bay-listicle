// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
import dummyData from "../../utils/dummy.json";
import FarmsList from "./FarmsList";

const ListicleTable = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:p-8 dark:bg-neutral-900">
          <div className="overflow-hidden shadow ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-20 md:rounded-lg">
            <table className="min-w-full divide-y divide-neutral-300 dark:divide-neutral-600 text-neutral-900 dark:text-white">
              <thead className="bg-neutral-50 dark:bg-neutral-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
                  >
                    Farm
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    TVL
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold"
                  >
                    Yield
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Go to farm</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-600 bg-white dark:bg-neutral-800">
                <FarmsList farms={dummyData} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListicleTable;

// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   visits: number;
//   status: string;
//   progress: number;
// };

// The Normal Data in Array of Objects
// const defaultData: Person[] = [
//   {
//     firstName: "sarthak",
//     lastName: "verma",
//     age: 22,
//     visits: 69,
//     status: "Single",
//     progress: 27,
//   },
//   {
//     firstName: "chandrakant",
//     lastName: "khannade",
//     age: 23,
//     visits: 40,
//     status: "In Relationship",
//     progress: 80,
//   },
//   {
//     firstName: "vaibhavi",
//     lastName: "thosar",
//     age: 21,
//     visits: 15,
//     status: "Complicated",
//     progress: 25,
//   },
// ];

// const columns: ColumnDef<Person>[] = [
//   {
//     header: "Name",
//     footer: (props) => props.column.id,
//     columns: [
//       {
//         accessorKey: "firstName",
//         cell: (info) => info.getValue(),
//         header: () => <span>First Name</span>,
//         footer: (props) => props.column.id,
//       },
//       {
//         accessorFn: (row) => row.lastName,
//         id: "lastName",
//         cell: (info) => info.getValue(),
//         header: () => <span>Last Name</span>,
//         footer: (props) => props.column.id,
//       },
//     ],
//   },
//   {
//     header: "Info",
//     footer: (props) => props.column.id,
//     columns: [
//       {
//         accessorKey: "age",
//         header: () => "Age",
//         footer: (props) => props.column.id,
//       },
//       {
//         header: "More Info",
//         columns: [
//           {
//             accessorKey: "visits",
//             header: () => <span>Visits</span>,
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: "status",
//             header: "Status",
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: "progress",
//             header: "Profile Progress",
//             footer: (props) => props.column.id,
//           },
//         ],
//       },
//     ],
//   },
// ];

// const ListicleTable = () => {
//   console.log("dummy", dummyData);
//   const [data, setData] = useState(() => [...defaultData]);
//   const rerender = useReducer(() => ({}), {})[1];

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div>
//       <table classNameName="w-full border border-gray-300">
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th
//                   key={header.id}
//                   colSpan={header.colSpan}
//                   classNameName="border-b border-r border-gray-300 py-1 px-3"
//                 >
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody classNameName="border-b border-gray-300">
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//         <tfoot classNameName="text-gray-500">
//           {table.getFooterGroups().map((footerGroup) => (
//             <tr key={footerGroup.id}>
//               {footerGroup.headers.map((header) => (
//                 <th
//                   key={header.id}
//                   colSpan={header.colSpan}
//                   classNameName="font-normal"
//                 >
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.footer,
//                         header.getContext()
//                       )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </tfoot>
//       </table>

//       <div classNameName="h-4" />

//       <button onClick={() => rerender()} classNameName="border p-2">
//         Rerender
//       </button>
//     </div>
//   );
// };

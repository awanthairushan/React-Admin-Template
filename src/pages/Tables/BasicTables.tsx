import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import CommonTable from "../../components/tables/BasicTables/BasicTableOne"; // Adjust path as needed
import Pagination from "../../components/ui/pagination";

type Order = {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  budget: string;
  status: "Active" | "Pending" | "Cancel";
};

const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    projectName: "Agency Website",
    team: {
      images: [
        "/images/user/user-22.jpg",
        "/images/user/user-23.jpg",
        "/images/user/user-24.jpg",
      ],
    },
    budget: "3.9K",
    status: "Active",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    projectName: "Technology",
    team: {
      images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
    },
    budget: "24.9K",
    status: "Pending",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      role: "Content Writing",
    },
    projectName: "Blog Writing",
    team: {
      images: ["/images/user/user-27.jpg"],
    },
    budget: "12.7K",
    status: "Active",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    projectName: "Social Media",
    team: {
      images: [
        "/images/user/user-28.jpg",
        "/images/user/user-29.jpg",
        "/images/user/user-30.jpg",
      ],
    },
    budget: "2.8K",
    status: "Cancel",
  },
  {
    id: 5,
    user: {
      image: "/images/user/user-21.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    projectName: "Website",
    team: {
      images: [
        "/images/user/user-31.jpg",
        "/images/user/user-32.jpg",
        "/images/user/user-33.jpg",
      ],
    },
    budget: "4.5K",
    status: "Active",
  },
];

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const { image, name, role } = row.original.user;
      return (
        <div className="flex items-center gap-3">
          <img src={image} alt={name} className="h-10 w-10 rounded-full" />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "projectName",
    header: "Project",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "team",
    header: "Team",
    cell: ({ row }) => (
      <div className="flex -space-x-2">
        {row.original.team.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="h-8 w-8 rounded-full border-2 border-white"
            alt="Team member"
          />
        ))}
      </div>
    ),
  },
  {
    accessorKey: "budget",
    header: "Budget",
    cell: ({ getValue }) => <span className="font-medium">{getValue<string>()}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      const color =
        status === "Active"
          ? "bg-green-100 text-green-700"
          : status === "Pending"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-red-100 text-red-700";

      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${color}`}>
          {status}
        </span>
      );
    },
  },
];

const BasicTables = () => {
  const [pagedData, setPagedData] = useState(tableData)
  const [page, setPage] = useState(1);
  const pageSize = 2; // Items per page

  useEffect(() => {
    setPagedData(tableData.slice((page - 1) * pageSize, page * pageSize))
    console.log("amri ", pagedData);    
  },[page])
  
  useEffect(() => {
    console.log("amri ", pagedData);    
  },[pagedData])
  
  return (
    <>
      <CommonTable data={pagedData} columns={columns} />
      <Pagination
        totalPages={Math.ceil(tableData.length / pageSize)}
        currentPage={page}
        onPageChange={setPage}
      />
    </>
  );
};

export default BasicTables;
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Trophy } from "lucide-react";

export type Rank = {
  rank: number;
  item: string;
};

export const columns: ColumnDef<Rank>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "item",
    header: "Item",
    cell: ({ row }) => {
      const rank = row.getValue("rank") as number;

      if (rank > 3) {
        return <>{row.getValue("item")}</>;
      }

      return (
        <div className="flex flex-row justify-between items-center">
          {row.getValue("item")}
          <Trophy
            size={20}
            color={rank === 1 ? "#fbbf24" : rank === 2 ? "#d6d3d1" : "#CD7F32"}
          />
        </div>
      );
    },
  },
];

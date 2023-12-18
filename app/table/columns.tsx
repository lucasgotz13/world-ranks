"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export type Country = {
    flag: string;
    name: string;
    population: number;
    area: number;
    region: string;
};

export const columns: ColumnDef<Country>[] = [
    {
        accessorKey: "flag",
        header: "Flag",
    },
    {
        accessorKey: "name.common",
        id: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Name
                </Button>
            );
        },
    },
    {
        accessorKey: "population",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Population
                </Button>
            );
        },
        cell: ({ row }) => {
            const population = row.original.population;
            const formatted = new Intl.NumberFormat("en-US", {
                style: "decimal",
            }).format(population);
            return <span>{formatted}</span>;
        },
    },
    {
        accessorKey: "area",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Area(km<sup>2</sup>)
                </Button>
            );
        },
        cell: ({ row }) => {
            const area = row.original.area;
            const formatted = new Intl.NumberFormat("en-US", {
                style: "decimal",
            }).format(area);
            return <span>{formatted}</span>;
        },
    },
    {
        accessorKey: "region",
        header: "Region",
    },
];

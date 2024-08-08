"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { useLabels } from "@/features/label/api/get-labels";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";

const FilterForm = () => {
  const { data: labels, isLoading, error } = useLabels();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  const handleLabelFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const label = labels?.labels.find((label) => label.name === value)?.id;
    if (label) {
      params.set("label", label);
    } else {
      params.delete("label");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleStatusFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("status", value);
    } else {
      params.delete("status");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleCountFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("paginate", value);
    } else {
      params.delete("paginate");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    setSearch("");
    params.delete("q");
    params.delete("label");
    params.delete("status");
    params.delete("paginate");
    replace(`${pathname}?${params.toString()}`);
  };

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Error: Something went wrong!</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-between gap-4 mb-4">
        <Skeleton className="h-10 w-[391px] bg-slate-300" />
        <Skeleton className="h-10 w-[108px] bg-slate-300" />
        <Skeleton className="h-10 w-[108px] bg-slate-300" />
        <Skeleton className="h-10 w-[60px] bg-slate-300" />
        <Skeleton className="h-10 w-[67px] bg-slate-300" />
      </div>
    );
  }
  return (
    <div className="flex justify-between gap-4 mb-4">
      <Input
        placeholder="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
          setSearch(e.target.value);
        }}
        value={search}
      />
      <Select
        onValueChange={(value) => {
          handleLabelFilter(value);
        }}
        value={
          searchParams.get("label")
            ? labels?.labels.find(
                (label) =>
                  label.id.toString() === searchParams.get("label")?.toString()
              )?.name
            : ""
        }
      >
        <SelectTrigger className="w-[180px] capitalize">
          <SelectValue placeholder="Labels" />
        </SelectTrigger>
        <SelectContent>
          {labels?.labels.map((label, i) => (
            <SelectItem key={i} value={label.name} className="capitalize">
              {label.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => {
          handleStatusFilter(value);
        }}
        value={
          searchParams.get("status")
            ? searchParams.get("status")?.toString()
            : ""
        }
      >
        <SelectTrigger className="w-[180px] capitalize">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"to_do"} className="capitalize">
            To Do
          </SelectItem>
          <SelectItem value={"solved"} className="capitalize">
            Solved
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => {
          handleCountFilter(value);
        }}
        value={
          searchParams.get("paginate")
            ? searchParams.get("paginate")?.toString()
            : "20"
        }
      >
        <SelectTrigger className="w-[90px] capitalize">
          <SelectValue placeholder="Issues" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"10"}>10</SelectItem>
          <SelectItem value={"20"}>20</SelectItem>
          <SelectItem value={"50"}>50</SelectItem>
        </SelectContent>
      </Select>
      <Button
        onClick={() => handleClear()}
        className="transition-all ease-in-out duration-200 hover:scale-105 active:scale-95"
      >
        Clear
      </Button>
    </div>
  );
};

export default FilterForm;

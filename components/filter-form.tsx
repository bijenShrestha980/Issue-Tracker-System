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

import { useLabels } from "@/features/label/api/get-labels";

const FilterForm = () => {
  const {
    data: labels,
    isLoading: labelsIsLoading,
    error: labelsError,
  } = useLabels();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
    if (value) {
      params.set("label", value);
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

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    params.delete("label");
    params.delete("status");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between gap-4 mb-4">
      <Input
        placeholder="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={searchParams.get("q")?.toString()}
      />
      <Select
        onValueChange={(value) => {
          handleLabelFilter(value);
        }}
        // value={
        //   labels?.labels.find((label) => label.id === searchParams.get("label"))
        //     ?.name
        // }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Labels" />
        </SelectTrigger>
        <SelectContent>
          {labels?.labels.map((label, i) => (
            <SelectItem key={i} value={label.id} className="capitalize">
              {label.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => {
          handleStatusFilter(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
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
    </div>
  );
};

export default FilterForm;

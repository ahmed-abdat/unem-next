"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { matiers } from "@/constats/calculations-moyen/matiers-calculation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


export function MatiersOptions({
  value = "",
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<
    React.SetStateAction<{ value: string; label: string }>
  >;
}) {
  const [open, setOpen] = React.useState(false);
  //   const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full text-white bg-primary-color hover:bg-green-2  hover:text-gray-200 transition-all shadow-option justify-between h-10 mt-4 font-semibold font-rb text-base"
          aria-label="choose your speciality"
        >
          {value
            ? matiers.find((framework) => framework.value === value)?.label
            : "اختر الشعبة ..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-full font-medium font-rb text-base">
        <Command className="w-full font-medium font-rb text-base">
          <CommandInput
            placeholder="البحث عن الشعبة ..."
            className="h-10 w-full font-medium font-rb text-sm"
          />
          <CommandEmpty className="font-medium font-rb text-base p-2">
            لم يتم إيجاد الشعبة
          </CommandEmpty>
          <CommandGroup className="font-medium font-rb text-base">
            {matiers.map((framework) => (
              <CommandItem
                className="font-medium font-rb text-base"
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(
                    currentValue === value
                      ? { value: "", label: "" }
                      : { value: currentValue, label: currentValue }
                  );
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

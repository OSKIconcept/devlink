import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectScrollable() {
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <Select>
      <SelectTrigger
        // value={selected}
      
        className="w-full bg-white px-[16px] py-[12px] rounded-lg border-[#D9D9D9] border"
      >
        <SelectValue placeholder="Select a Platform" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
        <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
        <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
      </SelectContent>
    </Select>
  );
}

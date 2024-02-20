import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SemesterOption , semesterOptions } from "@/constats/resulta/semester-options";

export default function SelectSemster({ setOption , option}: { setOption: (value: string) => void , option: string }) {

    const handleItemClick = (value: string) => {
        setOption(value);
    }

  return (
    <Select onValueChange={handleItemClick} defaultValue={option} >
      <SelectTrigger className="w-[220px] md:w-[200px]" aria-label="semester-option">
        <SelectValue placeholder="semester" />
      </SelectTrigger>
      <SelectContent className='w-[150px]' >
        {
            semesterOptions.map((option: SemesterOption) => (
                <SelectItem key={option.value} value={option.value} aria-label={option.label}>
                    {option.label}
                </SelectItem>
            ))
        }
      </SelectContent>
    </Select>
  );
}

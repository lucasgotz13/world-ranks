import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "./ui/checkbox";

export default function Filters() {
    return (
        <div className="px-10 flex flex-col gap-5">
            <label htmlFor="sort-by" className="text-[#6C727F] ">
                Sort by
            </label>
            <Select>
                <SelectTrigger className="w-full md:w-[300px]">
                    <SelectValue placeholder="Population" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="population">Population</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div>
                <p className="text-[#6C727F] mb-2">Region</p>
                <div className="flex items-center flex-wrap gap-5 list-none">
                    <li className="px-3 py-1.5 bg-[#282B30] rounded-xl">
                        Americas
                    </li>
                    <li className="text-[#6C727F]">Antarctic</li>
                    <li className="px-3 py-1.5 bg-[#282B30] rounded-xl">
                        Africa
                    </li>
                    <li className="px-3 py-1.5 bg-[#282B30] rounded-xl">
                        Asia
                    </li>
                    <li className="px-3 py-1.5 bg-[#282B30] rounded-xl">
                        Europe
                    </li>
                    <li className="text-[#6C727F]">Oceania</li>
                </div>
            </div>
            <div className="flex flex-col gap-2.5">
                <p className="text-[#6C727F]">Status</p>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Member of the United Nation
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" defaultChecked />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Independent
                    </label>
                </div>
            </div>
        </div>
    );
}

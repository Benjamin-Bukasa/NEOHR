import * as React from "react"
import Navbar from "../components/localUI/Navbar";
import {Button} from "../components/ui/button"
import { Bell,MessageSquareMore,ChevronsUpDown,Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const DashboardNavbar = () => {
  return (
    
        <Navbar className="">
            <div className="flex flex-col">
                <span className="font-semibold">Aperçu</span>
                <span className="font-semibold text-neutral-500">Vendredi, 12 Septembre 2025</span>
            </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Bell />
          </Button>
          <Button variant="outline">
            <MessageSquareMore />
          </Button>
            <Select>
                <SelectTrigger className="w-[140px]">
                    <Languages/>
                    <SelectValue placeholder="Langue" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Langue</SelectLabel>
                    <SelectItem value="apple">Français</SelectItem>
                    <SelectItem value="banana">English</SelectItem>
                    <SelectItem value="blueberry">Chinois</SelectItem>
                    <SelectItem value="grapes">Arabe</SelectItem>
                    <SelectItem value="pineapple">Hindi</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
      </Navbar>
  );
}

export default DashboardNavbar;

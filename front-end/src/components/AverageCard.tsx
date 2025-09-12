import React from 'react';
// import { ChevronsUpDown } from "lucide-react";
import {ChartBarActive} from "@/components/ui/ChartBarActive"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const AverageCard = () => {
  return (
    <div className="flex flex-col gap-8 bg-white border rounded-lg p-2">
      <div className="flex items-center justify-between">
        <h3>Résumé KPI Score</h3>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Cette semaine" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Intervalle de temps</SelectLabel>
              <SelectItem value="apple">Aujourd'hui</SelectItem>
              <SelectItem value="banana">Cette semaine</SelectItem>
              <SelectItem value="blueberry">Ce mois-ci</SelectItem>
              <SelectItem value="grapes">Cette année</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <p className="">4.76/5</p>
        <ChartBarActive/>
      </div>
    </div>
  );
}

export default AverageCard;

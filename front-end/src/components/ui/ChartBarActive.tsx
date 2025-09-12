import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"
import type { ChartConfig } from "@/components/ui/chart"; 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with an active bar"

const chartData = [
  { browser: "juillet", visitors: 187, fill: "#2563eb" },
  { browser: "Août", visitors: 275, fill: "#2563eb" },
  { browser: "Septembre", visitors: 90, fill: "#2563eb" },
]

const chartConfig = {
  visitors: {
    label: "Juillet",
  },
  firefox: {
    label: "Août",
    color: "var(--chart-1)",
  },
  other: {
    label: "Septembre",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartBarActive() {
  return (
    <Card className="border-none shadow-none w-full">
      <CardContent className="w-full">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="w-full flex gap-2 leading-none font-medium justify-between">
          <p>Employé avec un KPI en dessous de la moyenne </p><TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          29 employés
        </div>
      </CardFooter>
    </Card>
  )
}

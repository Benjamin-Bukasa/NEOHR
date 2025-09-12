import AverageCard from "@/components/AverageCard"
import DashboardNavbar from "@/components/DashboardNavbar"


function Dashboard() {
  return (
    <div className="bg-white w-full h-full flex flex-col gap-4 border rounded-lg p-2">
      <DashboardNavbar />
      <div className="w-full h-full flex items-start gap-2 p-2 ">
        <div className="h-full flex flex-col gap-2 w-1/4 border rounded-lg p-2">
          <AverageCard />
          <AverageCard />
        </div>
        <div className="w-3/4 h-full border rounded-lg p-2">okay</div>
      </div>
    </div>
  )
}

export default Dashboard
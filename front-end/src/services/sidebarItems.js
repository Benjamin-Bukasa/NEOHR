import { LayoutDashboard, Users, CalendarClock, Banknote, Briefcase, Book, BarChart2} from "lucide-react";


export const menuItems = [
    { id:1,title: "Tableau de bord", path: "/dashboard", icon: LayoutDashboard },
    { id:2,title: "Gestion des Employés", path: "/employees", icon: Users },
    { id:3,title: "Pointages et congé", path: "/timeattendances", icon: CalendarClock},
    { id:4,title: "Payroll", path: "/payrolls", icon: Banknote },
    { id:5,title: "Recrutement", path: "/recruitments", icon: Briefcase },
    { id:6,title: "Formation", path: "/trainings", icon: Book },
    { id:7,title: "Rapports & Analyse", path: "/reports", icon: BarChart2 },
    
]


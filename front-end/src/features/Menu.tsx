import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../utils/sidebarItems";
import { Button } from "../components/ui/button";

const Menu = () => {
  const location = useLocation(); // permet de savoir l'URL courante

  return (
    <div className="flex flex-col gap-2">
      {menuItems.map((item:string, id:number) => {
        const Icon:string = item.icon;
        const isActive = location.pathname === item.path; // vérifie si la route est active

        return (
          <div
            key={id}
            className={`flex items-center justify-between gap-4 px-2 py-2 rounded-md cursor-pointer text-[13px] font-semibold transition-colors ${
              isActive
                ? "bg-white border shadow-sm"
                : "text-neutral-600 hover:bg-gray-100"
            }`}
          >
            <Link to={item.path} className="flex items-center gap-4 w-full">
              {Icon && <Icon className="w-5 h-5" />}
              <span>{item.title}</span>
            </Link>

            {/* <Button
              className="w-6 h-6 text-[12px] bg-neutral-200 text-neutral-700 font-bold hover:text-neutral-900 hover:bg-neutral-300 border-none"
              variant="secondary"
            >
              17
            </Button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

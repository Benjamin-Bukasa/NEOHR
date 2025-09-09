import UserCard from "./localUI/UserCard";
import Menu from "../features/Menu";
import SearchInput from "./localUI/SearchInput";


const Sidebar = () => {
  return (
    <div className="w-72 p-4 border-r flex flex-col gap-4">
      <UserCard />
      <SearchInput />
      <Menu/>
    </div>
  );
}

export default Sidebar;

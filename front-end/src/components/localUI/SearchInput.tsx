import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-1 pl-0 py-2 pr-0">
      <Button className="border-none hover:bg-none hover:border-none" variant="outline">
        <Search className="h-4 w-4" />
      </Button>
      <Input type="search" placeholder="Chercher..." className="w-full" />
    </div>
  );
}

export default SearchInput;

import {ChevronsUpDown} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const UserCard = () => {

  const userAvatar = false; // Remplacer par la source réelle de l'avatar utilisateur
  const userName = "BK"; // Remplacer par le nom réel de l'utilisateur

  return (
    <div className='p-2 bg-white border rounded-lg shadow-sd flex items-center justify-between gap-4'>
      <div className="flex justify-center items-center">
        <div className="object-fill rounded-lg h-10 w-10 bg-gray-200 flex items-center justify-center">
          {userAvatar ?<img src="images/avatarTemp.png"/>:userName}
        </div>
        <div className="text-[12px] leading-tight ml-2 flex flex-col">
          <p className="font-semibold text-neutral-500">Développeur web</p>
          <p className="font-semibold">Benjamin KABEYA</p>
        </div>
      </div>
      {/* <Button className="bg-blue-600">
        <ChevronsUpDown className="h-4 w-4" />
      </Button> */}
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronsUpDown className="h-2 w-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Notifications
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Réglages
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Raccourcis clavier
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Equipe</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Inviter un collaborateur</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Plus...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            Nouvelle Equipe
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Aide ?</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>Abonnement</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Deconnexion
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
}

export default UserCard;

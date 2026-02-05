import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from '@headlessui/react'
import { Menu as MenuHamburguer } from 'lucide-react';

export function Header() {

  return (
    <>

        {/* mobile header */}

      <div className="w-full h-22.5 border px-6.5 py-9 flex items-center justify-between">
        <div>Fellipe Santos</div>

        {/* dropdawn menu */}

        <NavigationMenu className=" md:hidden">
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger><MenuHamburguer/></NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-300 rounded-sm p-4 border-none flex flex-col items-center">
                    <NavigationMenuLink>About</NavigationMenuLink>
                    <NavigationMenuLink>Experience</NavigationMenuLink>
                    <NavigationMenuLink>Projects</NavigationMenuLink>
                    <NavigationMenuLink>Contact</NavigationMenuLink>
                    <NavigationMenuLink><Button className="rounded bg-gray-300 border border-gray-600 px-5 py-2 text-sm text-black data-active:bg-gray-400 data-hover:bg-gray-400">
                        Resume
                    </Button></NavigationMenuLink>
                    <NavigationMenuLink><Button className="rounded bg-gray-300 border border-gray-600 px-5 py-2 text-sm text-center text-black data-active:bg-gray-400 data-hover:bg-gray-400">
                        Hire Me
                    </Button></NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        
      </div>
    </>
  )
}
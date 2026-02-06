import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@headlessui/react'
import { Menu as MenuHamburguer } from 'lucide-react';

export function Header() {

  return (
    <>

        {/* mobile header */}

      <div className="w-full h-22.5 px-6.5 py-9 flex items-center justify-between">
        <div>Fellipe Santos</div>

        {/* dropdawn menu */}

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="cursor-pointer"><MenuHamburguer/></SheetTrigger>
            <SheetContent className="bg-gray-200">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <div className="w-full flex flex-col items-center gap-16 mt-20">
                  <div className="flex flex-col gap-4 items-center">
                    <a href="#">About</a>
                    <a href="#">Experience</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button className="border-2 border-gray-300 rounded-sm px-4 py-1 cursor-pointer hover:bg-gray-300">Resume</Button>
                    <Button className="border-2 border-gray-300 rounded-sm px-4 py-1 cursor-pointer hover:bg-gray-300">Hire Me</Button>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        
        
      </div>
    </>
  )
}
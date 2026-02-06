import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { Button } from '@headlessui/react'
import { TextAlignEnd } from 'lucide-react';


const App = () => {
  return (
    <TextAlignEnd />
  );
};

export default App;


export const HeaderMobile = () => {
  return (
    <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="cursor-pointer"><TextAlignEnd/></SheetTrigger>
            <SheetContent className="bg-gray-200" onCloseAutoFocus={(event) => {event.preventDefault()}}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <div className="w-full flex flex-col items-center gap-16 mt-20">
                  <div className="flex flex-col gap-4 items-center">
                    <SheetClose asChild>
                      <a href="#about">About</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#experience">Experience</a>
                    </SheetClose>
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
  )
}
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Logo from "@/assets/TestLogo.svg";
import Simmons from "@/assets/simmons.png";
import settings from "@/assets/settings.svg";
import more_vert from "@/assets/more_vert.svg";
import { Menu } from "lucide-react";

export default function Component() {
  return (
    <header className="flex h-16 w-full items-center px-4 md:px-6 rounded-full bg-white my-4 mx-auto overflow-hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline" aria-label="Toggle navigation menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" to="/">
            <img src={Logo} alt="Acme Inc Logo" className="h-32 w-32" />
          </Link>
          <nav className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/about">
              About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/services">
              Services
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" to="/contact">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" to="/">
        <img src={Logo} alt="Acme Inc Logo" className="h-32 w-32" />
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#01F0D0] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          to="/"
        >
          Home
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#01F0D0] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          to="#"
        >
          About
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#01F0D0] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          to="#"
        >
          Services
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-[#01F0D0] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          to="#"
        >
          Contact
        </Link>
      </nav>

      <section role="contentinfo" className="ml-auto hidden lg:flex gap-6">
        <div className="flex gap-2 items-center">
          <img src={Simmons} alt="Dr. Jose Simmons" className="h-12 w-12 rounded-full" />
          <div>
            <p className="font-bold">Dr. Jose Simmons</p>
            <p className="text-[#707070]">General Practitioner</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="p-2" aria-label="Settings">
            <img src={settings} alt="Settings" />
          </button>
          <button className="p-2" aria-label="More options">
            <img src={more_vert} alt="More options" />
          </button>
        </div>
      </section>
    </header>
  );
}

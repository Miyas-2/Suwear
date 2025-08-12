import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { LogoBrand } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { OtherMenu } from "@/components/other-menu";
import { TopBar } from "./top-bar";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <div className="w-full fixed z-[1001]">
      {/* Top bar - Hide on mobile */}
      <div className="w-full bg-background hidden sm:flex justify-center border-b">
        <TopBar />
      </div>

      {/* Main navigation */}
      <nav className="w-full flex justify-center bg-background border-b border-b-foreground/10 h-14 sm:h-16">
        <div className="w-full container flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm">
          {/* Left side - Logo + Desktop Nav */}
          <div className="flex items-center gap-3 sm:gap-5 font-semibold">
            <Link href={"/"} className="flex-shrink-0">
              <LogoBrand />
            </Link>

            {/* Desktop Navigation - Hidden on tablet and below */}
            <div className="hidden xl:block">
              <NavMenu />
            </div>
          </div>

          {/* Center - Search bar for tablet and desktop */}
          <div className="hidden md:flex items-center w-48 lg:w-64 xl:w-80 max-w-md mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for an item"
                className="pl-10 pr-4 py-2 h-9 rounded-full bg-muted/50 border-muted focus:bg-background transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
          </div>

          {/* Right side menu */}
          <div className="flex gap-1 sm:gap-2 lg:gap-3 items-center">
            {/* Search button for mobile only */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0 hover:bg-muted"
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* Other menu - Show on larger tablets and desktop */}
            <div className="hidden lg:flex">
              <OtherMenu />
            </div>

            {/* Auth button - Responsive sizing */}
            <div className="hidden sm:block">
              {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="xl:hidden h-8 w-8 p-0 hover:bg-muted"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 mt-6">
                  {/* Mobile search */}
                  <div className="md:hidden">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search for an item"
                        className="pl-10 pr-4 py-3 rounded-lg"
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    </div>
                  </div>

                  {/* Navigation menu for mobile/tablet */}
                  <div className="xl:hidden">
                    <NavMenu orientation="vertical" />
                  </div>

                  {/* Other menu for mobile/tablet */}
                  <div className="lg:hidden">
                    <OtherMenu orientation="vertical" />
                  </div>

                  {/* Auth section for mobile */}
                  <div className="sm:hidden pt-4 border-t">
                    {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}

export function HeaderBlog() {
  return (
    <div className="w-full fixed z-[1001]">
      {/* Top bar - Hide on mobile */}
      <div className="w-full bg-background hidden sm:flex justify-center border-b">
        <TopBar />
      </div>

      {/* Main navigation */}
      <nav className="w-full flex justify-center bg-background border-b border-b-foreground/10 h-14 sm:h-16">
        <div className="w-full container flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm">
          {/* Left side - Logo + Desktop Nav */}
          <div className="flex items-center gap-3 sm:gap-5 font-semibold">
            <Link href={"/"} className="flex-shrink-0">
              <LogoBrand />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:block">
              <NavMenu />
            </div>
          </div>

          {/* Center - Search bar for tablet and desktop */}
          <div className="hidden md:flex items-center w-48 lg:w-64 xl:w-80 max-w-md mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 h-9 rounded-full bg-muted/50 border-muted focus:bg-background transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
          </div>

          {/* Right side menu */}
          <div className="flex gap-1 sm:gap-2 lg:gap-3 items-center">
            {/* Search button for mobile only */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0 hover:bg-muted"
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* Other menu - Show on larger tablets and desktop */}
            <div className="hidden lg:flex">
              <OtherMenu />
            </div>

            {/* Auth button - Responsive sizing */}
            <div className="hidden sm:block">
              {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="xl:hidden h-8 w-8 p-0 hover:bg-muted"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 mt-6">
                  {/* Mobile search */}
                  <div className="md:hidden">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search articles..."
                        className="pl-10 pr-4 py-3 rounded-lg"
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    </div>
                  </div>

                  {/* Navigation menu for mobile/tablet */}
                  <div className="xl:hidden">
                    <NavMenu orientation="vertical" />
                  </div>

                  {/* Other menu for mobile/tablet */}
                  <div className="lg:hidden">
                    <OtherMenu orientation="vertical" />
                  </div>

                  {/* Auth section for mobile */}
                  <div className="sm:hidden pt-4 border-t">
                    {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}

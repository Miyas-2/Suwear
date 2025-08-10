import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { LogoBrand } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { OtherMenu } from "@/components/other-menu";
import { TopBar } from "./top-bar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <div className="w-full fixed z-[1001]">
      <div className="w-full bg-background flex justify-center border-b">
        <TopBar />
      </div>
      <nav className="w-full flex justify-center bg-background border-b border-b-foreground/10 h-16">
        <div className="w-full container flex justify-between items-center py-3 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"}>
              <LogoBrand />
            </Link>
            <NavMenu />
          </div>
          {/* Search bar */}
          <div className="flex items-center w-56 md:w-72">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for an item"
                className="pl-10 pr-4 py-2 rounded-md bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <OtherMenu />
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export function HeaderBlog() {
  return (
    <div className="w-full fixed z-[1001]">
      <div className="w-full bg-background flex justify-center border-b">
        <TopBar />
      </div>
      <nav className="w-full flex justify-center bg-background border-b border-b-foreground/10 h-16">
        <div className="w-full container flex justify-between items-center py-3 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"}>
              <LogoBrand />
            </Link>
            <NavMenu />
          </div>
          {/* Search bar */}
          <div className="flex items-center w-56 md:w-72">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for an article"
                className="pl-10 pr-4 py-2 rounded-md bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <OtherMenu />
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </div>
      </nav>
    </div>
  );
}

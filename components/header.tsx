import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { LogoBrand } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { OtherMenu } from "@/components/other-menu";
import { TopBar } from "./top-bar";

export function Header() {
  return (
    <div className="w-full fixed z-50">
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
          <div className="flex gap-5 items-center">
            <OtherMenu />
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </div>
      </nav>
    </div>
  );
}

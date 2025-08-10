import Link from "next/link";
import { LogoBrand } from "@/components/logo";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Footer() {
  return (
    <div className="w-full bg-background text-foreground px-6 md:px-0 py-12">
      <footer className="container mx-auto">
        <div className="flex justify-between flex-wrap md:flex-row flex-col gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            {/* Logo only, no SUSTYLE vector */}
            <Link href={"/"}>
              <LogoBrand />
            </Link>
            <p className="mt-4 text-sm text-accent-foreground max-w-xs">
              Connecting fashion and sustainability through pre-loved clothing
              exchange.
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Links</h3>
            <Link
              className="hover:text-foreground/70 transition duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-foreground/70 transition duration-300"
              href="/explore"
            >
              Explore
            </Link>
          </div>
          {/* Company */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <Link
              className="hover:text-foreground/70 transition duration-300"
              href="/"
            >
              About Us
            </Link>
            <Link
              className="hover:text-foreground/70 transition duration-300"
              href="/"
            >
              Contact
            </Link>
            <Link
              className="hover:text-foreground/70 transition duration-300"
              href="/"
            >
              FAQ
            </Link>
          </div>
          {/* Social */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <Link
              className="hover:text-foreground/70 transition duration-300"
              href="/"
            >
              Instagram
            </Link>
            <Link
              className="hover:text-foreground/70 transition duration-300"
              href="/"
            >
              Twitter
            </Link>
            <Link
              className="hover:text-foreground/70 transition duration-300"
              href="/"
            >
              Facebook
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-center border-t border-gray-700 mt-8 pt-4 text-center">
          <small className="text-gray-500">
            © 2025 Suwear. All rights reserved.
          </small>
          <ThemeSwitcher />
        </div>
      </footer>
    </div>
  );
}

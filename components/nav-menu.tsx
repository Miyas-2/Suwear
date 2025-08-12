"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface NavMenuProps {
  orientation?: "horizontal" | "vertical";
}

export function NavMenu({ orientation = "horizontal" }: NavMenuProps) {
  const categories = [
    {
      name: "Wanita",
      items: [
        { name: "Dress", href: "/search?category=dress&gender=women" },
        { name: "Tops", href: "/search?category=tops&gender=women" },
        { name: "Bottoms", href: "/search?category=bottoms&gender=women" },
        { name: "Outerwear", href: "/search?category=outerwear&gender=women" },
      ],
    },
    {
      name: "Pria",
      items: [
        { name: "Shirts", href: "/search?category=shirts&gender=men" },
        { name: "T-Shirts", href: "/search?category=tshirts&gender=men" },
        { name: "Pants", href: "/search?category=pants&gender=men" },
        { name: "Jackets", href: "/search?category=jackets&gender=men" },
      ],
    },
    {
      name: "Anak",
      items: [
        { name: "Boys", href: "/search?category=boys&gender=kids" },
        { name: "Girls", href: "/search?category=girls&gender=kids" },
        { name: "Baby", href: "/search?category=baby&gender=kids" },
        { name: "Shoes", href: "/search?category=shoes&gender=kids" },
      ],
    },
  ];

  if (orientation === "vertical") {
    return (
      <div className="w-full px-4">
        <Accordion type="single" collapsible className="w-full">
          {categories.map((category) => (
            <AccordionItem key={category.name} value={category.name}>
              <AccordionTrigger className="text-base font-medium hover:no-underline">
                {category.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2 pl-4">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {categories.map((category) => (
          <NavigationMenuItem key={category.name}>
            <NavigationMenuTrigger className="text-sm">
              {category.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-1 p-2">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

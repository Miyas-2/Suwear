"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, Heart, MessageCircle } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

interface OtherMenuProps {
  orientation?: "horizontal" | "vertical";
}

export function OtherMenu({ orientation = "horizontal" }: OtherMenuProps) {
  const menuItems = [
    {
      name: "Favorites",
      href: "/favorite",
      icon: Heart,
    },
    {
      name: "Notifications",
      href: "/notifications",
      icon: Bell,
    },
    {
      name: "Messages",
      href: "/chat",
      icon: MessageCircle,
    },
  ];

  if (orientation === "vertical") {
    return (
      <div className="flex flex-col gap-2 w-full px-4">
        <h3 className="font-medium text-sm text-muted-foreground mb-2">
          Quick Actions
        </h3>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="justify-start gap-3 h-12"
            >
              <Link href={item.href}>
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            </Button>
          );
        })}
      </div>
    );
  }

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-0">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.href} title={item.name}>
                  <Icon className="w-4 h-4 text-foreground" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

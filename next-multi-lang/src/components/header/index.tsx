"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import { LanguageSwitcher, ThemeSwitcher } from "@/components/layout";
import { usePathname } from "next/navigation";

type HeaderProps = {
  data: {
    label: string;
    href: string;
  }[];
};

const Header: React.FC<HeaderProps> = ({ data }) => {
  const pathname = usePathname();

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Multi-lang Demo</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {data.map((item) => (
          <NavbarItem isActive={pathname === item.href} key={item.href}>
            <Link as={NextLink} color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export { Header };

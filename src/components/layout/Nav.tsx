"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";
import { Source_Serif_4 } from "next/font/google";
import { usePathname } from "next/navigation";

export const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: "400", 
});

export const AcmeLogo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/Navbar/logo.png"} height={20} width={80} alt="logo" />
    </Link>
  );
};

export default function App() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Manufacturing Units", href: "/manufacturing-units" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
  ];


  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-white text-black">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className={`${sourceSerif4.className} font-bold`}>DHANSHIRI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <AcmeLogo />
          <p className={`${sourceSerif4.className} font-bold`}>DHANSHIRI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex md:gap-6 lg:gap-12" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.href} isActive={pathname === link.href}>
            <Link color="foreground" href={link.href} className={`text-black ${pathname === link.href ? "font-bold" : ""}`}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/contact-us" variant="flat" className="bg-green-500 text-white font-bold">
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

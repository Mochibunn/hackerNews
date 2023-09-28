import React from "react";

import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Input, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {AcmeLogo} from "../AcmeLogo.jsx";
import { SearchIcon } from "../SearchIcon.jsx";

export default function HackNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "New",
    "Past",
    "Comments",
    "Ask",
    "Show",
    "Submit",
    "",
    "Settings",
    "Jobs",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">hackerNews</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">hackerNews</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            {menuItems[0]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {menuItems[1]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {menuItems[2]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {menuItems[3]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {menuItems[4]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {menuItems[5]}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="hidden sm:flex items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150" //Placeholder data
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">placeholder@da.ta</p> {/* Placeholder data */}
            </DropdownItem>
            <DropdownItem key="settings">{menuItems[7]}</DropdownItem>
            <DropdownItem key="team_settings">{menuItems[8]}</DropdownItem>
            <DropdownItem key="analytics">{menuItems[9]}</DropdownItem>
            <DropdownItem key="logout" color="danger">{menuItems[10]}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 0 ? "success" : index === menuItems.length - 1 ? "danger" : "foreground"
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

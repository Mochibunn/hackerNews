import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Input, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {AcmeLogo} from "../AcmeLogo.jsx";
import { SearchIcon } from "../SearchIcon.jsx";
import { useState, useEffect } from "react";

export default function HackNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const noUserIcon = "https://media.discordapp.net/attachments/199274450011553792/1156984505408700417/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.png"; 
  const emailPlaceholder = "hi@placehold.er";
  const userIconPlaceholder = "https://i.pravatar.cc/150";



  const signInClick = () => {
    setSignedIn(!signedIn);
  };

  const menuItems = [
    "New", //index 0
    "Past",
    "Comments",
    "Ask",
    "Show",
    "Submit",
    "", //index 6
    "Settings",
    "Jobs",
    "Help & Feedback",
    "Sign Out", //index 10
    "Sign In" //index 11
  ];

  const LinkTemplate = ({i}) => {
    return(
        <NavbarMenuItem>
          <Link
          className="w-full"
          color="foreground"
          href="#"
          size="lg">
            {menuItems[i]}
          </Link>
        </NavbarMenuItem>
      )
    };

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
              src={ signedIn ? userIconPlaceholder : noUserIcon } //Placeholder data
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">{signedIn ? `Signed in as:` : `Not signed in`}</p>
              {signedIn && <p className="font-semibold">{emailPlaceholder}</p>}
            </DropdownItem>
            <DropdownItem key="settings">{menuItems[7]}</DropdownItem>
            <DropdownItem key="team_settings">{menuItems[8]}</DropdownItem>
            <DropdownItem key="analytics">{menuItems[9]}</DropdownItem>
            <DropdownItem key="logout" color={signedIn ? "danger" : "warning"} onClick={signInClick}>{signedIn ? menuItems[10] : menuItems[11]}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        
        <NavbarMenuItem>
          {signedIn && <p className="text-xs">Signed in as: <b>{emailPlaceholder}</b></p>} {/* Placeholder data */}
        </NavbarMenuItem>
        
        <NavbarMenuItem>
          <Link
          className="w-full"
          color="primary"
          href="#"
          size="lg">
            {menuItems[0]}
          </Link>
        </NavbarMenuItem>
          <LinkTemplate i={1}/>
          <LinkTemplate i={2}/>
          <LinkTemplate i={3}/>
          <LinkTemplate i={4}/>
          <LinkTemplate i={5}/>
          <br/>
          <LinkTemplate i={7}/>
          <LinkTemplate i={8}/>
          <LinkTemplate i={9}/>
          <NavbarMenuItem>
        <Link
          className="w-full"
          color={ signedIn ? "danger" : "warning"}
          href="#"
          size="lg"
          onClick={signInClick}>
            { signedIn ? menuItems[10] : menuItems[11] }
          </Link>
        </NavbarMenuItem>

        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 0 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
      </NavbarMenu>
    </Navbar>
  );
}

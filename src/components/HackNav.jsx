import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Divider, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Input, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import {AcmeLogo} from "../AcmeLogo.jsx";
import { SearchIcon } from "../SearchIcon.jsx";
import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar.jsx";


export default function HackNav({ setNewsContent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(
    () => JSON.parse(localStorage.getItem('isSignedIn'))
  );

  const noUserIcon = "https://media.discordapp.net/attachments/199274450011553792/1156984505408700417/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.png"; 
  const emailPlaceholder = "hi@placehold.er";
  const userIconPlaceholder = "https://avatars.githubusercontent.com/u/103283434?width=0&height=150";

  

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

  const LinkTemplate = ({i}) => { //mobile mode links
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

  const LinkTemplateBig = ({i}) => {
    return(
      <NavbarItem>
      <Link color="foreground" href="#">
        {menuItems[i]}
      </Link>
    </NavbarItem>
    )
  };

  useEffect(() => {
    localStorage.setItem('isSignedIn', JSON.stringify(signedIn))
  }, [signedIn]);

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
        <LinkTemplateBig i={1}/>
        <LinkTemplateBig i={2}/>
        <LinkTemplateBig i={3}/>
        <LinkTemplateBig i={4}/>
        <LinkTemplateBig i={5}/>

      </NavbarContent>

      <NavbarContent as="div" className="hidden sm:flex items-center" justify="end">
      <NavbarContent as="div" className="hidden sm:flex items-center" justify="end">

      <Searchbar setNewsContent={setNewsContent} />
      
      </NavbarContent>

        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search.."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        /> */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Mochibun"
              size="sm"
              src={ signedIn ? userIconPlaceholder : noUserIcon } //Placeholder data
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <>
              <p>{signedIn ? `Signed in as:` : `Not signed in`}</p>
              {signedIn && <p className="font-semibold">{emailPlaceholder}</p>}
              <Divider className="mt-1"/>
              </>
            </DropdownItem>
            <DropdownItem key="settings">{menuItems[7]}</DropdownItem>
            <DropdownItem key="team_settings">{menuItems[8]}</DropdownItem>
            <DropdownItem key="analytics">{menuItems[9]}</DropdownItem>
            <DropdownItem key="logout" color={signedIn ? "danger" : "warning"} onClick={signInClick}>{signedIn ? menuItems[10] : menuItems[11]}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu> {/* Mobile layout hamburger menu */}
        <NavbarMenuItem>
          {signedIn && <>
            <Avatar
              isBordered
              as="button"
              className="transition-transform mb-1"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src={userIconPlaceholder} //Placeholder data
            />
            <p className="text-xs">Signed in as: <b>{emailPlaceholder}</b></p>
          </>}
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

    
      </NavbarMenu>
    </Navbar>
  );
}


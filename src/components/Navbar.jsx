import { React, useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import logo from "../assets/BustixLogo.png"
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: <SquaresPlusIcon />,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: <UserGroupIcon />,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: <Bars4Icon />,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: <SunIcon />,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: <GlobeAmericasIcon />,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: <PhoneIcon />,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: <NewspaperIcon />,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: <RectangleGroupIcon />,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: <TagIcon />,
  },
];

const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
           <div className="w-6 h-6 text-gray-900">
            {icon}
           </div>
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

const NavList = () => {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { token, user, logout } = useAuth();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <Link to={"/"}>
            <div className="flex items-center">
              <img src={logo} alt="bustixlogo" className="h-[60px] " />
              <span className="ml-[-30px] mb-[-30px] text-[14px] font-semibold text-[rgba(4,72,108,0.94)]">
                BusTix
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {token ? (
          <div className="hidden gap-2 lg:flex">
            <Link to={"/login"}>
              <Button variant="text" size="sm" color="blue-gray">
                {/* <UserCircleIcon /> */}
                Log In
              </Button>
            </Link>
            <Button
              className="bg-[rgba(4,72,108,0.94)]"
              size="sm"
              onClick={logout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <div className="hidden gap-2 lg:flex">
            <Link to={"/login"}>
              <Button variant="text" size="sm" color="blue-gray">
                Log In
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button className="bg-[rgba(4,72,108,0.94)]" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        )}
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-12 w-12" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-12 w-12" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {token ? (
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Link to={"/login"}>
              <Button variant="text" size="sm" color="blue-gray">
                {/* <UserCircleIcon /> */}
                Log In
              </Button>
            </Link>
            <Button variant="gradient" size="sm" onClick={logout}>
              Log Out
            </Button>
          </div>
        ) : (
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Link to={"/login"}>
              <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                Log In
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant="gradient" size="sm" fullWidth>
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </Collapse>
    </Navbar>
  );
}


export default NavBar;
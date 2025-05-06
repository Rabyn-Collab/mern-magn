import React from "react";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";






export default function Header() {



  return (
    <Navbar className=" p-2 ">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>



        <Button size="sm" variant="text">
          <span>Log In</span>
        </Button>
        <ProfileMenu />
      </div>

    </Navbar>
  );
}
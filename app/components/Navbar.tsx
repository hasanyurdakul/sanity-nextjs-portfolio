import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggleButton";
import {
  Binary,
  Code,
  FolderOpen,
  Home,
  Mail,
  NotebookPen,
  PenLine,
  Slash,
  SquareUserRound,
  User,
  UserRound,
} from "lucide-react";

const Navbar = () => (
  <div className="w-full  fixed z-[999]">
    <div className=" rounded-lg shadow-xl    bg-[background]  w-full   lg:max-w-2xl mx-auto lg:mt-2 mt-0 py-3 px-3 relative">
      <div className="grid grid-flow-col justify-between items-center">
        <Link className="flex items-center font-bold text-3xl " href={"/"}>
          <Slash className="text-primary " />
          <span>h</span>
          <span className="text-primary">y</span>
        </Link>
        <ThemeToggleButton />
      </div>
      <div className="flex items-center lg:mt-0 mt-2 justify-evenly ">
        <Link href={"/"}>
          <div className="flex items-center ">
            <Home className="size-5 text-primary" />
            &nbsp; Home
          </div>
        </Link>
        <Link href={"/project"}>
          <div className="flex items-center ">
            <Code className="size-5 text-primary " />
            &nbsp; Projects
          </div>
        </Link>
        <Link href={"/blog"}>
          <div className="flex items-center ">
            <PenLine className="size-5 text-primary" />
            &nbsp; Blog
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className="flex items-center ">
            <Mail className="size-5 text-primary" />
            &nbsp; Contact
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;

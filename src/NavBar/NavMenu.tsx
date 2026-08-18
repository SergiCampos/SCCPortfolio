import { type ReactNode } from "react";
import { NavClock } from "./NavClock.tsx";

type NavMenuProps = {
  children: ReactNode;
};

const NavMenu = ({ children }: NavMenuProps) => {
  return (
    <nav className="dev_border fixed top-0 left-0 flex h-screen w-14 flex-col bg-(--nav-bg)">
      <ul className="flex flex-col flex-wrap items-center justify-center gap-0.5 pt-2">{children}</ul>
      <NavClock />
    </nav>
  );
};

export { NavMenu };

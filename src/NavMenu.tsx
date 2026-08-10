import type { ReactNode } from "react";

type NavMenuProps = {
  children: ReactNode;
};

const NavMenu = ({ children }: NavMenuProps) => {
  return (
    <nav className="navbar fixed top-0 left-0 flex h-screen w-14 flex-col border border-(--nav-border) bg-(--nav-bg)">
      <ul className="flex flex-col flex-wrap items-center justify-center gap-2 pt-2">{children}</ul>
    </nav>
  );
};

export { NavMenu };

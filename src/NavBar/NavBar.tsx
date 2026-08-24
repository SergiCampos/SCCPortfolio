import { NavMenu } from "./NavMenu";
import { PageMenuButton } from "./PageMenuButton";
import { ExtendMenuButton } from "./ExtendMenuButton";

const NavBar = () => {
  return (
    <NavMenu>
      <ExtendMenuButton text={"@"} link={"Link XT"} />
      <PageMenuButton text={"HM"} link={"link HM"} />
      <PageMenuButton text={"AB"} link={"link AB"} />
      <PageMenuButton text={"WK"} link={"link WK"} />
      <PageMenuButton text={"PJ"} link={"link PJ"} />
      <PageMenuButton text={"CT"} link={"link CT"} />
    </NavMenu>
  );
};
export default NavBar;

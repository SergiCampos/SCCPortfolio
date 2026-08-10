import "./index.css";
import { NavMenu } from "./NavMenu.tsx";
import { PageMenuButton } from "./PageMenuButton.tsx";
import { ExtendMenuButton } from "./ExtendMenuButton.tsx";

function App() {
  return (
    <>
      <NavMenu>
        <ExtendMenuButton text={"@"} link={"Link XT"} />
        <PageMenuButton text={"HM"} link={"link HM"} />
        <PageMenuButton text={"AB"} link={"link AB"} />
        <PageMenuButton text={"WK"} link={"link WK"} />
        <PageMenuButton text={"PJ"} link={"link PJ"} />
        <PageMenuButton text={"CT"} link={"link CT"} />
      </NavMenu>
    </>
  );
}

export default App;

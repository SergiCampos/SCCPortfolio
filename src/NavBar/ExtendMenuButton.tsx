import { NavButton } from "./NavButton";
type ExtendMenuButtonProps = {
  text: string;
  link: string;
};
const ExtendMenuButton = ({ text, link }: ExtendMenuButtonProps) => {
  const classNames = "flex items-center justify-center bg-(--nav-bg) text-(--font-bl-color) dev_border p-2 w-10 h-10";
  const onClick = (link: string) => () => console.log(link);
  return <NavButton text={text} onClick={onClick(link)} classNames={classNames} />;
};

export { ExtendMenuButton };

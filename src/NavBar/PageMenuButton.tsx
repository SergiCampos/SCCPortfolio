import { NavButton } from "./NavButton";
type PageMenuButtonProps = {
  text: string;
  link: string;
};
const PageMenuButton = ({ text, link }: PageMenuButtonProps) => {
  const classNames = "flex items-center text-xs justify-center bg-blue-400 dev_border p-2 w-10 h-10";
  const onClick = (link: string) => () => console.log(link);
  return <NavButton text={text} onClick={onClick(link)} classNames={classNames} />;
};

export { PageMenuButton };

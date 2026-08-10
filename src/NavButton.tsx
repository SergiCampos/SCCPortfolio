type NavButtonProps = {
  text: string;
  classNames: string;
  onClick: () => void;
};
const NavButton = ({ text, classNames, onClick }: NavButtonProps) => {
  return (
    <li className={classNames}>
      <button onClick={onClick}>{text}</button>
    </li>
  );
};

export { NavButton };

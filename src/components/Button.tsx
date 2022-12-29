import type { FunctionComponent, ComponentChildren } from 'preact';

interface IButtonProps {
  children: ComponentChildren;
}

const Button: FunctionComponent<IButtonProps> = ({ children }) => {
  const handleClick = () => alert('button clicked');

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;

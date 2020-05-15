/// <reference types="react" />
interface ButtonProps {
    component?: string;
    children?: any;
    href?: string;
    text?: boolean;
    alert?: string;
    color?: string;
    outlined?: boolean;
    capsule?: boolean;
    darkTheme?: boolean;
    icon?: string;
    circular?: boolean;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;

/// <reference types="react" />
interface IconProps {
    name: string;
    viewBox?: string;
    inverted?: boolean;
    color?: string;
    height?: number | string;
    width?: number | string;
}
declare const Icon: (props: IconProps) => JSX.Element;
export default Icon;

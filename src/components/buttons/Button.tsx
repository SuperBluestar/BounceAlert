import { FC, Component, ReactNode, ReactPropTypes } from "react"

interface IButton {
    children?: String | ReactNode;
    props?: ReactPropTypes;
    className?: String;
}

const Button: FC<IButton> = ({ className = "", props, children = <></> }: IButton) => {
    return (
        <div 
            className={`w-48 h-11 rounded-md text-white flex justify-center items-center ${className}`}
            {...props}
        >
        {children}
        </div>
    )
}

export default Button;
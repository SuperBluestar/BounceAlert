import { FC, ReactNode, ReactPropTypes } from "react";

interface IIconButton {
    icon?: String;
    text?: String;
    className?: String;
    children?: ReactNode;
    props?: ReactPropTypes;
}

const IconButton: FC<IIconButton> = ({ icon = "", text = "", children = <></>, className = "", ...props}) => {
    return (
        <div className={`flex justify-center items-center ${className}`} {...props}>
            { icon !== "" ? <img className="mr-4 w-5 h-5" src={`/assets/images/icon/${icon}.png`} alt={`${icon}`} /> : ""}
            { text !== "" ? <span>{text}</span> : "" }
            { children !== <></> ? children : "" }
        </div>
    )
}

export default IconButton;
import { FC, ReactNode, ReactPropTypes } from "react";

interface IIconText {
    icon?: String;
    text?: String;
    className?: String;
    children?: ReactNode;
    props?: ReactPropTypes;
}

const IconText: FC<IIconText> = ({icon = "", text = "", className = "", children = <></>, ...props}) => {
    return (
        <div className={`flex items-center ${className}`} {...props}>
        { icon !== "" ? <img className="mr-4 w-5 h-5" src={`/assets/images/icon/${icon}.png`} alt={`${icon}`} /> : ""}
        { text !== "" ? <span>{text}</span> : "" }
        { children !== <></> ? children : "" }
        </div>
    )
}

export default IconText;
import { FC, ReactPropTypes } from "react";

interface IAppLogo {
    className?: String;
    size?: Number;
    props?: ReactPropTypes;
}

const AppLogo: FC<IAppLogo> = ({className = "", size = 16, ...props}) => {
    return (
        <img className={`w-${size} h-auto ${className}`} src="/assets/images/Logo.png" alt="Logo" />
    )
}

export default AppLogo;
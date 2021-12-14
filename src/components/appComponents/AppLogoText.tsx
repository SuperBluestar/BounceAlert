import { FC, ReactPropTypes } from "react";

interface IAppLogoText {
    className?: String;
    id?: String;
    props?: ReactPropTypes;
}

const AppLogoText: FC<IAppLogoText> = ({ className = "", id = "", ...props}) => {
    return (
        <div className={`flex items-center ${className}`}>
            <img className="w-16 h-16 mr-8" src="/assets/images/Logo.png" alt="Logo" />
            <img className="w-40 h-8" src="/assets/images/Logo-Text.png" alt="Logo Text" />
        </div>
    )
}

export default AppLogoText;
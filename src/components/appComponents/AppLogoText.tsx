import { FC, ReactPropTypes } from "react";
import AppText from './AppText';

interface IAppLogoText {
    className?: String;
    textSizeClassName?: String;
    id?: String;
    props?: ReactPropTypes;
}

const AppLogoText: FC<IAppLogoText> = ({ className = "", textSizeClassName = "", id = "", ...props}) => {
    return (
        <div className={`flex items-center ${className}`}>
            <img className="w-16 h-16 mr-8" src="/assets/images/Logo.png" alt="Logo" />
            {/* <img className="w-40 h-8" src="/assets/images/Logo-Text.png" alt="Logo Text" /> */}
            <AppText textSizeClassName={textSizeClassName}></AppText>
        </div>
    )
}

export default AppLogoText;
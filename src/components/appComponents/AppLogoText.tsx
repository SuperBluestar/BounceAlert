import { FC, ReactPropTypes } from "react";
import AppText from './AppText';
import AppLogo from './AppLogo';

interface IAppLogoText {
    className?: String;
    textSizeClassName?: String;
    id?: String;
    props?: ReactPropTypes;
}

const AppLogoText: FC<IAppLogoText> = ({ className = "", textSizeClassName = "", id = "", ...props}) => {
    return (
        <div className={`flex items-center ${className}`}>
            {/* <img className="w-16 h-auto mr-8" src="/assets/images/Logo.png" alt="Logo" /> */}
            <AppLogo className="mr-8" size={16} />
            {/* <img className="w-40 h-8" src="/assets/images/Logo-Text.png" alt="Logo Text" /> */}
            <AppText textSizeClassName={textSizeClassName}></AppText>
        </div>
    )
}

export default AppLogoText;
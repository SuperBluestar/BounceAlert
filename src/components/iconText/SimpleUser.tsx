import { FC, ReactNode, ReactPropTypes } from "react";

interface ISimpleUser {
    avatar?: String;
    username?: String;
    className?: String;
    props?: ReactPropTypes;
}

const SimpleUser: FC<ISimpleUser> = ({avatar = "", username = "", className = "", children = <></>, ...props}) => {
    return (
        <div className={`flex items-center ${className}`} {...props}>
        { avatar !== "" ? <img className="mr-3 w-7 h-7" src={`/assets/images/avatar/${avatar}.png`} alt={`${avatar}`} /> : ""}
        { username !== "" ? <span className="text-white">{username}</span> : "" }
        </div>
    )
}

export default SimpleUser;
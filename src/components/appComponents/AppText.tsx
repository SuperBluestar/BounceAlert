import { FC } from "react";

interface IAppText {
    textSizeClassName?: String;
    text?: String;
}

const AppText: FC<IAppText> = ({textSizeClassName, text = "alerts"}) => {
    return (
        <div className="flex justify-center lg:justify-start flex-wrap sm:flex-nowrap">
            <h4 className={`text-white font-extrabold ${textSizeClassName || "text-7xl"}`}>bounce</h4>
            {/* <h4 className={`font-light ml-2.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${textSizeClassName || "text-7xl"}`}>alerts</h4> */}
            <h4 className={`font-light ml-2.5 text-transparent bg-clip-text bg-conic-spec-01 ${textSizeClassName || "text-7xl"}`}>{text}</h4>
        </div>
    )
}

export default AppText;
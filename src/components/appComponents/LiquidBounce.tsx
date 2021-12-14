import { FC, ReactNode, ReactPropTypes } from "react";
import IconText from '../iconText/IconText';

interface ILiquidBounce {
    title?: String | ReactNode;
    description?: String | ReactNode;
    ethPrice?: Number;
    risingRate?: Number;
    className?: String;
    props?: ReactPropTypes;
}

const LiquidBounce: FC<ILiquidBounce> = ({ title = "", description = "", className = "", ethPrice = 0.0, risingRate = 0.0, ...props}) => {
    return (
        <div className={`w-80 rounded-2xl bg-color-07 p-3.5 flex items-center ${className}`} {...props}>
            <img className="w-10 h-10 mr-3.5" src="/assets/images/LiquidBounce.png" alt="LiquidBounce" />
            <div className="flex-grow flex flex-col">
                <span className="text-sm text-white">{title}</span>
                <span className="text-sm font-light text-main">{description}</span>
            </div>
            <div className="flex flex-col items-end">
                <IconText className="text-white" icon="eth-icon-white" iconClass="w-3 h-5" text={`${ethPrice} ETH`}></IconText>
                <span className="text-color-06 text-right">
                +{risingRate}%
                </span>
            </div>
        </div>
    )
}

export default LiquidBounce;
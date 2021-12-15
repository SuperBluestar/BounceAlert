import { FC, ReactPropTypes } from "react";

interface ICircleEffect {
    sizeClassName?: String;
    positionClassName?: String;
    layerClassName?: String;
    className?: String;
    effectId?: String | Number;
    props?: ReactPropTypes;
}

const CircleEffect: FC<ICircleEffect> = ({sizeClassName = "", positionClassName = "", layerClassName = "", className = "", effectId = "", ...props}) => {
    return (
        <img className={`${sizeClassName} ${positionClassName} ${layerClassName} ${className}`} src={`/assets/images/EffectImage${effectId}.png`} alt="Effect" />
    )
}

export default CircleEffect;
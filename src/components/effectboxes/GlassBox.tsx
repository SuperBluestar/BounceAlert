import { FC, ReactNode, ReactPropTypes } from "react"

interface IGlassBox {
    props?: ReactPropTypes;
    children?: ReactNode;
    style?: Object;
    className?: String;
}

const GlassBox: FC<IGlassBox> = ({ className = "", style = {}, children = <></>, ...props}) => {
    return (
        <div className={`shadow-inner-01 flex justify-center items-center ${className}`} style={style}>
        {children}
        </div>
    )
}

export default GlassBox;
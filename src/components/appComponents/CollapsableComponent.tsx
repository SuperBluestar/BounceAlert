import { FC, useState } from "react";
import useCollapse from 'react-collapsed';

const CollapsableComponent: FC<{}> = () => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div className="bg-color-10 rounded-3xl mb-2.5">
            <div 
                className="bg-black rounded-3xl flex items-center" 
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                <div className="rounded-full bg-color-02 w-10 h-10 flex justify-center items-center text-white text-xl font-bold m-2.5">?</div>
                <span className="flex-grow text-white ml-4">Orem ipsum dolor sit amet, consectetur adipiscing.</span>
                { isExpanded ? <img className="w-4 h-2 mr-6" src="/assets/images/icon/up-icon.png" alt="Up" /> : <img className="w-4 h-2 mr-6" src="/assets/images/icon/down-icon.png" alt="Down" />}
            </div>
            <div className="px-6 py-4" {...getCollapseProps()}>
                <span className="text-main">Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </span>
            </div>
        </div>
    )
}

export default CollapsableComponent;
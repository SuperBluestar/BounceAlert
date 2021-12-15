import { FC, useState } from "react";
import AppLogoText from '../components/appComponents/AppLogoText';
import Button from '../components/buttons/Button';
import useCollapse from 'react-collapsed';

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

const Navbar: FC<{}> = () => {
    const [ isExpanded, setExpanded ] = useState(!detectMob())
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div id="navbar" className="bg-black xl:bg-transparent flex h-40 items-center px-16 relative z-50">
            <AppLogoText id="navbar-logo" className="mr-16" />
            <div className="flex-grow flex justify-end xl:hidden">
                <img 
                    className="w-12 h-12 p-3" 
                    src="/assets/images/icon/menu.png" 
                    alt="Menu" 
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                />
            </div>
            <div className="w-full top-40 xl:top-0 -mx-16 absolute xl:relative" {...getCollapseProps()}>
                <div className="bg-black xl:bg-transparent px-16 xl:mx-0 xl:px-0 w-full flex-col flex items-end xl:flex-row xl:items-center xl:flex-grow pb-20 xl:pb-0">
                    <span className="font-medium mr-0 xl:mr-12 text-main hover:text-white cursor-pointer">Home</span>
                    <span className="font-medium mr-0 xl:mr-12 text-main hover:text-white cursor-pointer">Testimonials</span>
                    <span className="font-medium mr-0 xl:mr-12 text-main hover:text-white cursor-pointer">Features</span>
                    <span className="font-medium mr-0 xl:mr-12 text-main hover:text-white cursor-pointer">FAQ</span>
                    <span className="font-medium mr-0 xl:mr-12 text-main hover:text-white cursor-pointer">Terms of Service</span>
                    <span className="font-medium mr-0 xl:mr-12 text-main hover:text-white cursor-pointer xl:hidden">Dashboard</span>
                    <div className="hidden xl:show xl:flex xl:flex-grow xl:justify-end pr-16">
                        <Button className="bg-color-01 cursor-pointer">
                            <span>Dashboard</span>
                        </Button>
                    </div>
                </div>
                <div className="block xl:hidden flex-grow bg-color-07 bg-opacity-70 w-full h-screen" 
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => false),
                    })}
                ></div>
            </div>
        </div>
    )
}

export default Navbar;
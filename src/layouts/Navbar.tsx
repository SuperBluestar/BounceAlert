import { FC, useState } from "react";
import AppLogoText from '../components/appComponents/AppLogoText';
import Button from '../components/buttons/Button';

import { default as HamburgerMenu } from 'react-hamburger-menu';
import useEffectOnce from "../hooks/useEffectOnce";
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
    const [openMenu, toggleOpenMenu] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded: openMenu });
    const [menuFixed, toggleMenuFixed] = useState(false);
    const stickyMenu: any = (e: Window, ev: Event) => {
        if (window.scrollY > 120 && !menuFixed) {
            toggleMenuFixed(true);
        } else if (window.scrollY < 120 && menuFixed) {
            toggleMenuFixed(false);
        }
    }
    useEffectOnce(() => {
        window.addEventListener('scroll', stickyMenu);
        return () => {
            window.removeEventListener('scroll', stickyMenu);
        }
    });
    return (
        <>
        <div id="navbar" className={`bg-transparent flex h-40 items-center px-16 z-50 w-full ${openMenu ? "bg-black" : ""} ${menuFixed ? "fixed top-0 bg-black" : "relative"}`}>
            <AppLogoText id="navbar-logo" className="mr-16" />
            <div className="flex-grow flex justify-end xl:hidden">
                <HamburgerMenu 
                    isOpen={openMenu} 
                    menuClicked={() => toggleOpenMenu(oldVal => !oldVal)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                />
                {/* <Menu 
                    bodyClassName="a"
                    burgerBarClassName="b w-8 "
                    burgerButtonClassName="c hidden"
                    className="d"
                    crossButtonClassName="w-6 h-6"
                    crossClassName="e"
                    htmlClassName="f"
                    itemListClassName="g"
                    menuClassName="h"
                    overlayClassName="h w-full left-0"
                    customBurgerIcon={<></>}
                    isOpen={openMenu} 
                    right
                >
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">Home</span>
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">Testimonials</span>
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">Features</span>
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">FAQ</span>
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">Terms of Service</span>
                    <div className="show flex flex-grow justify-end">
                        <Button className="bg-color-01 cursor-pointer">
                            <span>Dashboard</span>
                        </Button>
                    </div>
                </Menu> */}
                {/* <HamburgerMenu
                    isOpen={openMenu}
                    menuClicked={() => toggleOpenMenu(oldVal => !oldVal)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                /> */}
            </div>
            <div className="hidden xl:block w-full top-0 ml-16">
                <div className="bg-transparent mx-0 px-0 w-full flex flex-row items-center flex-grow pb-0">
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">Home</span>
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">Testimonials</span>
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">Features</span>
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">FAQ</span>
                    <span className="font-medium mr-12 text-main hover:text-white cursor-pointer">Terms of Service</span>
                    <div className="show flex flex-grow justify-end">
                        <Button className="bg-color-01 cursor-pointer">
                            <span>Dashboard</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="xl:hidden absolute top-40 -mx-16 px-16 w-full bg-black flex flex-col items-end h-screen" {...getCollapseProps()}>
                <span className="font-medium text-main hover:text-white cursor-pointer py-4">Home</span>
                <span className="font-medium text-main hover:text-white cursor-pointer py-4">Testimonials</span>
                <span className="font-medium text-main hover:text-white cursor-pointer py-4">Features</span>
                <span className="font-medium text-main hover:text-white cursor-pointer py-4">FAQ</span>
                <span className="font-medium text-main hover:text-white cursor-pointer py-4">Terms of Service</span>
                <span className="font-medium text-main hover:text-white cursor-pointer py-4">Dashboard</span>
                <div 
                    className="flex-grow w-full"
                    {...getToggleProps({
                        onClick: () => toggleOpenMenu((prevExpanded) => !prevExpanded),
                    })}
                ></div>
            </div>
        </div>
        </>
    )
}

export default Navbar;
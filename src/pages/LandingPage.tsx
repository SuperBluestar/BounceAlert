import { FC } from 'react';
import Button from '../components/buttons/Button';
import GlassBox from '../components/effectboxes/GlassBox';
import IconText from '../components/iconText/IconText';
import SimpleUser from '../components/iconText/SimpleUser';
import IconButton from '../components/buttons/IconButton';
import LiquidBounce from '../components/appComponents/LiquidBounce';
import CollapsableComponent from '../components/appComponents/CollapsableComponent';
import AppLogoText from '../components/appComponents/AppLogoText';

import { default as Slider, Settings, CustomArrowProps } from "react-slick";

import Navbar from '../layouts/Navbar';

const SamplePrevArrow: FC<CustomArrowProps> = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
        <div
            className="absolute -left-16 top-2/4 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer p-4"
            onClick={onClick}
        >
            <img src="/assets/images/icon/left-arrow.png" alt="Left" />
        </div>
    );
}

const SampleNextArrow: FC<CustomArrowProps> = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
        <div
            className="absolute -right-16 top-2/4 transform translate-x-1/2 -translate-y-1/2 cursor-pointer p-4"
            onClick={onClick}
        >
            <img src="/assets/images/icon/right-arrow.png" alt="Right" />
        </div>
    );
}

const LandingPage: FC = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className="bg-gradient-to-bl from-main via-black to-black relative">
                <Navbar />
                <div className="flex-col items-center lg:flex-row lg:justify-start flex pl-24 pr-24 mt-20 relative">
                    <div className="flex-grow-0 w-auto lg:w-96 xl:w-128">
                        <div className="w-96 h-28">
                            <img className="w-full h-full" src="/assets/images/Logo-Text.png" alt="Logo Text" />
                            <span className="font-light text-main">by <b className="font-extrabold">bounce</b> software</span>
                        </div>
                        <div className="mt-16">
                            <span className="text-white">Every aspect of reselling <b className="font-semibold">all in one place</b>. A <b className="font-semibold">prosperous</b> community with the main goal of helping members <b className="font-semibold">succeed</b>.</span>
                        </div>
                        <div className="mt-16">
                            <span className="text-white font-medium">Get <b className="font-bold">started</b> with us.</span>
                        </div>
                        <div className="flex justify-center lg:justify-start mt-7">
                            <Button className="bg-color-01 cursor-pointer">
                                <span>Sold Out</span>
                            </Button>
                            <Button className="ml-6 bg-color-02 cursor-pointer">
                                <span>Join Waitlist</span>
                            </Button>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0 relative flex-grow h-96 w-96">
                        <GlassBox className="absolute right-0 top-0 w-96 h-96 rounded-style-01">
                            <img className="w-48 h-48" src="/assets/images/Logo.png" alt="Logo" />
                        </GlassBox>
                        <GlassBox className="absolute right-8 top-80 xl:right-72 xl:top-40 w-80 h-20 shadow-inner-02 rounded-2xl backdrop-filter backdrop-blur">
                            <div className="font-medium">
                                <span className="text-color-02">Item Restocked</span>
                                <div className="flex items-center mt-2.5 text-white">
                                    <span className="mr-2.5">Stock Available:</span>
                                    <span>📦 600 Stock</span>
                                </div>
                            </div>
                        </GlassBox>
                        <GlassBox className="absolute right-8 top-80 mt-24 xl:right-24 xl:top-80 xl:mt-0 w-80 h-20 shadow-inner-02 rounded-2xl backdrop-filter backdrop-blur">
                            <div className="font-medium">
                                <span className="text-color-02">Item Sold</span>
                                <div className="flex items-center mt-2.5 text-white">
                                    <span className="mr-2.5">Calculated Profit:</span>
                                    <span>💰 2500$ USD</span>
                                </div>
                            </div>
                        </GlassBox>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <div className="flex items-center pl-24 pr-24 pt-44 pb-20 lg:pb-44">
                    <div className="border-b-2 border-color-03 flex-grow"></div>
                    <div className="ml-16 mr-16">
                        <img src="/assets/images/Logo.png" alt="Gif" />
                    </div>
                    <div className="border-b-2 border-color-03 flex-grow"></div>
                </div>
                <div className="grid grid-cols-12 grid-flow-row gap-4">
                    <div className="col-span-12 xl:col-span-5 row-span-1 ">
                        <div className="flex w-full h-10">
                            <div className="h-full rounded-tr-full bg-color-04 flex-grow"></div>
                            <div className="w-12 h-12">
                                <div className="w-full h-full bg-color-01 mt-6 rounded-full flex justify-center items-center">
                                    <img src="/assets/images/icon/icon01.png" alt="Down" />
                                </div>
                            </div>
                            <div className="h-full rounded-tl-full bg-color-04 flex-grow-0.5"></div>
                            <div className="h-full xl:rounded-tr-style-02 bg-color-04 flex-grow-0.5"></div>
                        </div>
                        <div className="w-full bg-color-04 xl:rounded-br-style-02 pl-16 pr-28 pb-20 pt-12">
                            <img className="w-44 h-8" src="/assets/images/Logo-Text.png" alt="Bounce features" />
                            <h4 className="font-semibold text-4xl text-white mt-9">Get the most out of your membership.</h4>
                            <p className="text-main mt-7">Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7 row-span-2 pl-16 xl:pl-32 pr-16">
                        <div className="flex xl:items-center">
                            <span className="text-main mr-5 font-semibold text-2xl">01</span>
                            <div className="bg-color-05 bg-opacity-5 px-4 py-2">
                                <span className="text-color-06 font-extrabold">AFTERMARKET COMMERCE</span>
                            </div>
                        </div>
                        <h4 className="font-semibold text-4xl text-white mt-9">Capitalizing on all forms of profitable flips.</h4>
                        <p className="text-main mt-7">Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div className="bg-color-07 rounded-style-03 p-7 mt-14">
                            <div className="flex-col sm:flex-row flex items-center sm:justify-between">
                                <span className="font-extrabold text-lg text-white">Larry Hoover Benefit Concert</span>
                                <span className="font-extrabold text-lg text-white">$250-400</span>
                            </div>
                            <div className="flex items-center mt-5 justify-center sm:justify-start">
                                <IconText className="text-main" icon="calendar" text="December 9th, 2021"></IconText>
                                <IconText className="text-main ml-11" icon="access-time" text="8:00 PM EST"></IconText>
                            </div>
                            <div className="flex-col sm:flex-row items-center flex mt-4">
                                <span className="text-main flex-grow">200 Tickets Available</span>
                                <div className="flex">
                                    <SimpleUser avatar="user01" username="Kanye West" />
                                    <SimpleUser className="ml-7" avatar="user02" username="Drake" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center relative">
                            <div className="absolute w-full h-full grid grid-cols-12 grid-flow-row z-0">
                                <div className="col-span-3 h-full border-r-2 border-dashed border-main"></div>
                                <div className="col-span-3 h-full border-r-2 border-dashed border-main"></div>
                                <div className="col-span-3 h-full border-r-2 border-dashed border-main"></div>
                                <div className="col-span-3 h-full"></div>
                            </div>
                            <IconButton className="bg-color-06 rounded-full w-96 h-14 mt-20 mb-20 z-10" icon="check-circle" text="Successfully Purchased"></IconButton>
                        </div>
                        <div className="bg-color-07 rounded-style-03 p-7 grid grid-cols-3 sm:grid-cols-4">
                            <div className="col-span-3 sm:col-span-2 flex flex-col items-center sm:items-start">
                                <span className="font-semibold text-lg text-white">Tickets sold!</span>
                                <span className="text-main">Larry Hoover Benefit Concert</span>
                            </div>
                            <div className="col-span-3 sm:col-span-2 flex justify-center sm:items-start">
                                <div className="flex-grow flex flex-col items-center">
                                    <IconText className="font-semibold text-lg text-white" icon="status-blue" text="1,200$"></IconText>
                                    <span className="text-main">Profit per unit</span>
                                </div>
                                <div className="flex-grow flex flex-col items-center">
                                    <IconText className="font-semibold text-lg text-white" icon="status-green" text="4,800$"></IconText>
                                    <span className="text-main">Total profit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-5 row-span-1 pl-16 pr-16 xl:pr-0 xl:mt-20">
                        <div className="flex items-center">
                            <span className="text-main mr-5 font-semibold text-2xl">02</span>
                            <div className="bg-color-05 bg-opacity-5 px-4 py-2">
                                <span className="text-color-05 font-extrabold">DIGITAL MARKETS</span>
                            </div>
                        </div>
                        <h4 className="font-semibold text-4xl text-white mt-9">Diversify your gain in digital markets.</h4>
                        <p className="text-main mt-7">Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 grid-flow-row border-b border-color-09">
                    <div className="col-span-12 xl:col-span-7 px-6 xl:px-0">
                        <div className="flex-col md:flex-row flex items-center justify-center mt-14">
                            <div className="">
                                <div className="w-80 h-60 flex justify-center">
                                    <img className="w-60 h-60" src="/assets/images/LiquidBounce.png" alt="Liquid Bounce" />
                                </div>
                                <div className="w-80 h-96 rounded-lg bg-color-07 -mt-40 flex flex-col justify-end items-center">
                                    <h5 className="text-white text-lg font-semibold mb-4">Liquid Bounce</h5>
                                    <IconText iconClass="w-12 h-12" className="mb-6" icon="logo-icon">
                                        <span className="text-white">by <b className="font-extrabold">bounce</b>alerts</span>
                                    </IconText>
                                    <div className="flex justify-center mb-7">
                                        <IconText iconClass="w-4 h-4" className="text-main" icon="eth-icon" text="0.67 ETH"></IconText>
                                        <IconText iconClass="w-4 h-4" className="ml-8 text-main" icon="eye-icon" text="15,000"></IconText>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center w-32 justify-center relative my-4">
                                <div className="rounded-full bg-color-05 flex justify-center items-center w-12 h-12 z-10">
                                    <img className="w-4 h-4 transform rotate-90 md:rotate-0" src="/assets/images/icon/left-icon.png" alt="Left" />
                                </div>
                                <div className="w-full border-0 md:border-b border-dashed border-main z-0 absolute"></div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <LiquidBounce title="Liquid Bounce" description={<><b className="font-extrabold">bounce</b>alerts</>} />
                                <LiquidBounce className="mt-4" title="Liquid Bounce" description={<><b className="font-extrabold">bounce</b>alerts</>} />
                                <LiquidBounce className="mt-4" title="Liquid Bounce" description={<><b className="font-extrabold">bounce</b>alerts</>} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-5 pr-16 border-l border-color-09">
                        <div className="flex items-center mt-20 justify-end">
                            <span className="text-main mr-5 font-semibold text-2xl">03</span>
                            <div className="bg-color-08 bg-opacity-5 px-4 py-2">
                                <span className="text-color-08 font-extrabold">EXCLUSIVE BENEFITS</span>
                            </div>
                        </div>
                        <h4 className="font-semibold text-4xl text-white mt-9 text-right pl-16 xl:pl-0">Successful arbritrage at its finest.</h4>
                        <p className="text-main mt-6 text-right pl-16 xl:pl-0">Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="rounded-xl bg-black-01 ml-16 mt-14">
                            <div className=" pt-6 pl-7 pr-7 pb-7">
                                <span className="text-color-08 font-semibold">Deals Found!</span>
                                <div className="flex justify-between items-center">
                                    <span className="text-main">23 Deals Found</span>
                                    <span className="text-main rounded-full bg-main bg-opacity-20 px-1">Save 1056$ on active deals!</span>
                                </div>
                            </div>
                            <div className="rounded-xl bg-color-07 pl-4 pr-4">
                                <div className="flex pt-4 pb-4">
                                    <div className="border border-color-09 w-14 h-14 flex justify-center items-center mr-3.5">
                                        <img src="/assets/images/ipad-pro.png" alt="IPad Pro" />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center">
                                        <span className="text-sm text-white font-semibold">Apple iPad Pro Space Grey </span>
                                        <span className="text-sm text-main font-semibold">BestBuy US</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-sm text-color-08 font-semibold">249.59</span>
                                        <span className="text-sm text-main font-semibold line-through">426.99</span>
                                    </div>
                                </div>
                                <div className="border-b border-color-09"/>
                                <div className="flex pt-4 pb-4">
                                    <div className="border border-color-09 w-14 h-14 flex justify-center items-center mr-3.5">
                                        <img src="/assets/images/shoes-white-black.png" alt="IPad Pro" />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center">
                                        <span className="text-sm text-white font-semibold">Nike Dunk Low Black White</span>
                                        <span className="text-sm text-main font-semibold">Goat</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-sm text-color-08 font-semibold">129.99</span>
                                        <span className="text-sm text-main font-semibold line-through">229.99</span>
                                    </div>
                                </div>
                                <div className="border-b border-color-09"/>
                                <div className="flex pt-4 pb-4">
                                    <div className="border border-color-09 w-14 h-14 flex justify-center items-center mr-3.5">
                                        <img src="/assets/images/shoes-white-black.png" alt="IPad Pro" />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center">
                                        <span className="text-sm text-white font-semibold">Nike Dunk Low Black White</span>
                                        <span className="text-sm text-main font-semibold">Goat</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-sm text-color-08 font-semibold">129.99</span>
                                        <span className="text-sm text-main font-semibold line-through">229.99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <div className="grid grid-cols-12">
                    <div className="col-span-2 xl:col-span-3"></div>
                    <div className="col-span-8 xl:col-span-6 py-28">
                        <Slider {...settings}>
                        {[1,2,3,4,5].map((val, id) => (<div key={id}>
                            <div className="flex flex-col items-center">
                                <img className="w-20 h-20" src="/assets/images/avatar/user03.png" alt="Avatar" />
                                <span className="mt-7 text-center text-white">“Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</span>
                                <IconText className="mt-8 text-white" icon="wifi-icon" text="ibra#0001 | BounceAlerts Member"></IconText>
                            </div>
                        </div>))}
                        </Slider>
                    </div>
                    <div className="col-span-2 xl:col-span-3"></div>
                </div>
            </div>
            <div className="bg-black border-b border-color-09 border-dashed">
                <div className="flex w-full h-10">
                    <div className="h-full rounded-tr-full bg-color-04 flex-grow"></div>
                    <div className="w-12 h-12">
                        <div className="w-full h-full bg-color-01 mt-6 rounded-full flex justify-center items-center">
                            <img src="/assets/images/icon/icon01.png" alt="Down" />
                        </div>
                    </div>
                    <div className="h-full rounded-tl-full bg-color-04 flex-grow-0.5"></div>
                    <div className="h-full bg-color-04 flex-grow-0.5"></div>
                </div>
                <div className=" bg-color-04 p-16">
                    <div className="grid grid-cols-12 grid-flow-row">
                        <div className="col-span-12 xl:col-span-6">
                        {[1,2,3,4].map((val, id) => (
                            <CollapsableComponent key={id} />
                        ))}
                        </div>
                        <div className="col-span-12 xl:col-span-6 flex flex-col items-center xl:items-end xl:pl-20">
                            <img className="w-48 h-8" src="/assets/images/Logo-Text.png" alt="Logo Text"></img>
                            <h4 className="mt-9 text-4xl text-white font-semibold text-right">All your questions answered in one place.</h4>
                            <span className="mt-7 text-main text-center xl:text-right">Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black-01 h-40 relative">
                <AppLogoText className="absolute left-2/4 transform -translate-x-2/4 top-2 xl:top-2/4 xl:-translate-y-2/4 cursor-pointer"/>
                <div className="grid grid-cols-2 grid-flow-row w-full h-full">
                    <div className="col-span-1 flex justify-center items-end mb-4 xl:mb-0 xl:items-center">
                        <IconText className="text-white cursor-pointer" icon="twitter" text="@bouncesoftware"></IconText>
                    </div>
                    <div className="col-span-1 flex justify-center items-end mb-4 xl:mb-0 xl:items-center">
                        <IconText className="text-white cursor-pointer" icon="instagram" text="@bouncesoftware"></IconText>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;
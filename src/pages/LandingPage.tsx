import { FC } from 'react';
import Button from '../components/buttons/Button';
import GlassBox from '../components/effectboxes/GlassBox';

const LandingPage: FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-bl from-main via-black to-black relative">
            <div id="navbar" className="flex h-40 items-center pl-16 pr-16">
                <div id="navbar-logo" className="flex items-center mr-16">
                    <img className="w-16 h-16 mr-8" src="/assets/images/Logo.png" alt="Logo" />
                    <img className="w-40 h-8" src="/assets/images/Logo-Text.png" alt="Logo Text" />
                </div>
                <div className="flex items-center flex-grow">
                    <span className="font-medium mr-12 text-main hover:text-white">Home</span>
                    <span className="font-medium mr-12 text-main hover:text-white">Testimonials</span>
                    <span className="font-medium mr-12 text-main hover:text-white">Features</span>
                    <span className="font-medium mr-12 text-main hover:text-white">FAQ</span>
                    <span className="font-medium mr-12 text-main hover:text-white">Terms of Service</span>
                </div>
                <div className="">
                    <Button className="bg-color-01">
                        <span>Dashboard</span>
                    </Button>
                </div>
            </div>
            <div className="flex flex-wrap pl-24 pr-24 relative">
                <div className="flex-grow-0">
                    <div className="w-96 h-28">
                        <img className="w-full h-full" src="/assets/images/Logo-Text.png" alt="Logo Text" />
                        <span className="font-light text-main">by <b className="font-extrabold">bounce</b> software</span>
                    </div>
                    <div className="mt-16">
                        <span className="text-white">Every aspect of reselling <b className="font-semibold">all in one place</b>. A<br /> <b className="font-semibold">prosperous</b> community with the main goal of helping<br /> members <b className="font-semibold">succeed</b>.</span>
                    </div>
                    <div className="mt-16">
                        <span className="text-white font-medium">Get <b className="font-bold">started</b> with us.</span>
                    </div>
                    <div className="flex mt-7">
                        <Button className="bg-color-01">
                            <span>Sold Out</span>
                        </Button>
                        <Button className="ml-6 bg-color-02">
                            <span>Join Waitlist</span>
                        </Button>
                    </div>
                </div>
                <div className="relative flex-grow">
                    <GlassBox className="absolute right-0 top-0 w-96 h-96 rounded-style-01">
                        <img className="w-48 h-48" src="/assets/images/Logo.png" alt="Logo" />
                    </GlassBox>
                    <GlassBox className="absolute right-72 top-40 w-80 h-20 shadow-inner-02 rounded-2xl backdrop-filter backdrop-blur">
                        <div className="font-medium">
                            <span className="text-color-02">Item Restocked</span>
                            <div className="flex items-center mt-2.5 text-white">
                                <span className="mr-2.5">Stock Available:</span>
                                <span>📦 600 Stock</span>
                            </div>
                        </div>
                    </GlassBox>
                    <GlassBox className="absolute right-24 top-80 w-80 h-20 shadow-inner-02 rounded-2xl backdrop-filter backdrop-blur">
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
    )
}

export default LandingPage;
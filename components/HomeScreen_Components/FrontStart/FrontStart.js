import React from 'react';
import Image from "next/image";
import Comment from "../Comment";

const FrontStart = () => {
    return (
        <div className="grid grid-cols-2 pl-20">
            <div className=" p-10">
                {/*<div>*/}
                {/*    <h1 className="text-[#EBEBED] text-6xl font-bold leading-tight max-w-screen-md md:leading-tight lg:text-7xl lg:leading-tight">The new era of smart emails platform</h1>*/}
                {/*</div>*/}

                <div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <h2 className="text-7xl font-bold cursor-pointer leading-none">Focused on web</h2>
                        </div>
                        <div  className="flex flex-row">
                            <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-400 cursor-pointer leading-none">fundamentals</h2>
                            <h2 className="text-7xl mx-2 font-bold cursor-pointer leading-none">and</h2>
                        </div>
                        <div className="flex flex-row">
                            <h2 className="text-7xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-400 cursor-pointer leading-none">modern</h2>
                            <h2 className="text-7xl mx-2 font-bold cursor-pointer leading-none">UX, you’re</h2>
                        </div>
                        <div className="flex flex-row">
                            <h2  className="text-7xl font-bold cursor-pointer leading-none">simply going to </h2>
                            <h2 className="text-7xl mx-2 font-bold   text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-400 cursor-pointer leading-none">build</h2>
                        </div>
                        <div>
                            <h2 className="text-7xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-400 cursor-pointer leading-none"> better emails</h2>
                        </div>
                    </div>
                    <div className="mt-8 mr-56">
                        <h3 className="text-white text-xl mb-8 text-gray-300 ">Brainlyemails comes packed with templates for any scenario and functionality to let you hit the ground running — in minutes, to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.</h3>
                    </div>

                    <div className="flex flex-row">
                        <div className=" flex items-center justify-center border border-2 border-gray-200 rounded-sm mr-6 cursor-pointer hover:border-gray-200 transition duration-150 ease-in-out">
                            <p className="text-white text-xl p-4 font-bold bg-transparent px-10">Read the Docs</p>
                        </div>
                        <div className=" flex items-center justify-center cursor-pointer">
                            <p className="text-white text-xl p-4 bg-blue-500 font-bold px-12 rounded-sm hover:bg-blue-400 transition duration-150 ease-in-out">Get Started</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-500 p-10 grid grid-cols-1">
                {/*<Image width={1000} height={1000} src="https://brainlyemails-storage174941-staging.s3.us-east-1.amazonaws.com/flat-mountains.svg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaDGV1LWNlbnRyYWwtMSJHMEUCIDdkfIie2nK0GjI3ooaE1F%2B5Of%2BO0kIb9WZerxB%2Bdv9pAiEAtx8sYXDsgPQn3dumD1ilZdNX0ZZ%2BHxSnKWeGMc8RxQwq9gIIGxAAGgw5ODY2OTg4NDA2MTgiDAwhkkIcAFbRa00TsSrTArAI4A79mYGr2n4YobGOHZ1BgZq4qo38nPgSoZF4S783k3YPPltDvYkjMZW3TmKFt3bnhc9c2%2BZfhcRo%2FdBIRc8Po6YqZwSWgCh7JW%2BwCVz299UsPe5wB%2FdVMFh4en6vAhj2dvVHP4T539NqQyO3xxawdafwBjuKF1FOMyVVby7FLlveaBuuhadMQ6AMnhU7jgL0JtbA17SHXv1qqO7f9TD4L776vqCLXMzMHEJGtCcADcpky%2F06V0XWE8UacpRRdyV398VfxjeS1HPQztJFqt5kJYzuUaQACqG76tRAYJdEMxIUmY18sIJNFxRC98p88fbXepRmWhZSz%2B%2B6n66N29TK%2F5QAA%2FFS9bGYWTSoWaiWC0rFZwoup3PiKyBa%2B%2BC0M0BxI1VryxRIyjXc%2ByjEZNA1b04QFSPDp7mStgjoOPhns5TurQghj9ReIHuwQocS0Z0bCTDUyNONBjqzAnrKhuFmi4cmP%2FeebTOxNhy4ILS9m0Y7i2qgVHDGUyk4kFN1pGX0I8gbe32rAAEYKCY8ctpJOMoC68hImG6fW6CUEtyqu6amVwrQfq0ZGGeXT7HirBCGRK1ZGAK1%2FChGKYZmTn4ANKvans%2BX2pDUDFbgfrt61RNYdLTnR6PJ6hBdpqbgnbBa8v%2FzaTgqUoPYKK%2FEWkqDKfBlKzyDaMCnSwEjRC12c445GNBTUsyHfcziOaZ5UOSQg9AtpiLoV9N7Owrs3fGsL8gtbTNis70B2XpMirDrRwIlHqIsXjqiVONXrP4VjzAWLTiMmu%2BBYY%2FygxlsVcI7HXDWGMCsp0aWCEK8FdMqB4%2FNnt5jh2nOnkjvojxTfsMyihkkv6iFIlmqiec%2BezUApu0MeoY%2FOOVf73Be05g%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211211T181409Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6LO6VPIVFB7FL6VB%2F20211211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2ed783e8e7ec021c3c837a98922ca2448307b3c69e70744a698119f3adf7181d" alt="w-96 h-56">*/}
                {/*</Image>*/}
                {/*<Image src="https://brainlyemails-storage174941-staging.s3.us-east-1.amazonaws.com/flat-mountains.svg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaDGV1LWNlbnRyYWwtMSJHMEUCIDdkfIie2nK0GjI3ooaE1F%2B5Of%2BO0kIb9WZerxB%2Bdv9pAiEAtx8sYXDsgPQn3dumD1ilZdNX0ZZ%2BHxSnKWeGMc8RxQwq9gIIGxAAGgw5ODY2OTg4NDA2MTgiDAwhkkIcAFbRa00TsSrTArAI4A79mYGr2n4YobGOHZ1BgZq4qo38nPgSoZF4S783k3YPPltDvYkjMZW3TmKFt3bnhc9c2%2BZfhcRo%2FdBIRc8Po6YqZwSWgCh7JW%2BwCVz299UsPe5wB%2FdVMFh4en6vAhj2dvVHP4T539NqQyO3xxawdafwBjuKF1FOMyVVby7FLlveaBuuhadMQ6AMnhU7jgL0JtbA17SHXv1qqO7f9TD4L776vqCLXMzMHEJGtCcADcpky%2F06V0XWE8UacpRRdyV398VfxjeS1HPQztJFqt5kJYzuUaQACqG76tRAYJdEMxIUmY18sIJNFxRC98p88fbXepRmWhZSz%2B%2B6n66N29TK%2F5QAA%2FFS9bGYWTSoWaiWC0rFZwoup3PiKyBa%2B%2BC0M0BxI1VryxRIyjXc%2ByjEZNA1b04QFSPDp7mStgjoOPhns5TurQghj9ReIHuwQocS0Z0bCTDUyNONBjqzAnrKhuFmi4cmP%2FeebTOxNhy4ILS9m0Y7i2qgVHDGUyk4kFN1pGX0I8gbe32rAAEYKCY8ctpJOMoC68hImG6fW6CUEtyqu6amVwrQfq0ZGGeXT7HirBCGRK1ZGAK1%2FChGKYZmTn4ANKvans%2BX2pDUDFbgfrt61RNYdLTnR6PJ6hBdpqbgnbBa8v%2FzaTgqUoPYKK%2FEWkqDKfBlKzyDaMCnSwEjRC12c445GNBTUsyHfcziOaZ5UOSQg9AtpiLoV9N7Owrs3fGsL8gtbTNis70B2XpMirDrRwIlHqIsXjqiVONXrP4VjzAWLTiMmu%2BBYY%2FygxlsVcI7HXDWGMCsp0aWCEK8FdMqB4%2FNnt5jh2nOnkjvojxTfsMyihkkv6iFIlmqiec%2BezUApu0MeoY%2FOOVf73Be05g%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211211T181409Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6LO6VPIVFB7FL6VB%2F20211211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2ed783e8e7ec021c3c837a98922ca2448307b3c69e70744a698119f3adf7181d" width="2000" height="2000" />*/}
            </div>


        </div>
    );
};

export default FrontStart;

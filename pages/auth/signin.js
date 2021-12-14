import React from 'react';
import {getProviders, signIn as SignIntoProvider } from "next-auth/react";

// Browser ⁉️
const signIn = ({ providers }) => {
    return (
        <>
            {/*<Header />*/}

            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <img className="w-80" src="https://links.papareact.com/ocw" alt=""/>

                <p className="font-xs italic">
                    This is not a REAL app, it is built to show for me, of what I am capable of! 🔥 ~Rokas
                </p>

                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id,  { callbackUrl: '/'})}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
};

export default signIn;


// Server side render
export async function getServerSideProps() {

    const providers = await getProviders();

    return {
        props: {
            // props that you want to pass to the page
            providers,
        },
    };
}

//http://localhost:3000/api/auth/callback/google' 👉 for the second one

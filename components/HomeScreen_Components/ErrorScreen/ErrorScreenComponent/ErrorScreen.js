import React from 'react';

const ErrorScreen = () => {
    return (
        <div className="w-screen h-screen bg-blue-500 px-32 flex justify-center flex-col">
            <div>
                <p className="text-[9rem] font-semibold">:)</p>
            </div>

            <div className="max-w-4xl">
                <p className="text-3xl">
                    Your emails run into problems, but with Brainlyemails they don’t need to be refreshed.
                    Error handling is hard to remember and hard to do. That’s why it’s built in.
                </p>

                <p className="text-3xl mt-10">
                    Brainlyemails handles errors while Server Rendering.
                    Errors while Client Rendering. Even errors in your server side data handling.
                </p>
            </div>

            <div className="mt-16">
                <img src="https://firebasestorage.googleapis.com/v0/b/rokas-brainlyemails.appspot.com/o/qr-code.png?alt=media&token=87b8f899-1658-48cf-a1f3-f3519cbe6e1d" className="w-36 h-36" alt=""/>
            </div>
        </div>
    );
};

export default ErrorScreen;

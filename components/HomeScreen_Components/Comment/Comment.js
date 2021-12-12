import React from 'react';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import TwitterIcon from '@mui/icons-material/Twitter';

const Comment = () => {
    return (
        <div className="flex items-center justify-center mt-32 flex-col">
            <div className="flex flex-row space-x-6 items-center">
                <div className="flex flex-row">
                    <div className="">
                        <img src="https://brainlyemails-storage174941-staging.s3.us-east-1.amazonaws.com/rokas-grayscale-header-logo.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaDGV1LWNlbnRyYWwtMSJHMEUCIDdkfIie2nK0GjI3ooaE1F%2B5Of%2BO0kIb9WZerxB%2Bdv9pAiEAtx8sYXDsgPQn3dumD1ilZdNX0ZZ%2BHxSnKWeGMc8RxQwq9gIIGxAAGgw5ODY2OTg4NDA2MTgiDAwhkkIcAFbRa00TsSrTArAI4A79mYGr2n4YobGOHZ1BgZq4qo38nPgSoZF4S783k3YPPltDvYkjMZW3TmKFt3bnhc9c2%2BZfhcRo%2FdBIRc8Po6YqZwSWgCh7JW%2BwCVz299UsPe5wB%2FdVMFh4en6vAhj2dvVHP4T539NqQyO3xxawdafwBjuKF1FOMyVVby7FLlveaBuuhadMQ6AMnhU7jgL0JtbA17SHXv1qqO7f9TD4L776vqCLXMzMHEJGtCcADcpky%2F06V0XWE8UacpRRdyV398VfxjeS1HPQztJFqt5kJYzuUaQACqG76tRAYJdEMxIUmY18sIJNFxRC98p88fbXepRmWhZSz%2B%2B6n66N29TK%2F5QAA%2FFS9bGYWTSoWaiWC0rFZwoup3PiKyBa%2B%2BC0M0BxI1VryxRIyjXc%2ByjEZNA1b04QFSPDp7mStgjoOPhns5TurQghj9ReIHuwQocS0Z0bCTDUyNONBjqzAnrKhuFmi4cmP%2FeebTOxNhy4ILS9m0Y7i2qgVHDGUyk4kFN1pGX0I8gbe32rAAEYKCY8ctpJOMoC68hImG6fW6CUEtyqu6amVwrQfq0ZGGeXT7HirBCGRK1ZGAK1%2FChGKYZmTn4ANKvans%2BX2pDUDFbgfrt61RNYdLTnR6PJ6hBdpqbgnbBa8v%2FzaTgqUoPYKK%2FEWkqDKfBlKzyDaMCnSwEjRC12c445GNBTUsyHfcziOaZ5UOSQg9AtpiLoV9N7Owrs3fGsL8gtbTNis70B2XpMirDrRwIlHqIsXjqiVONXrP4VjzAWLTiMmu%2BBYY%2FygxlsVcI7HXDWGMCsp0aWCEK8FdMqB4%2FNnt5jh2nOnkjvojxTfsMyihkkv6iFIlmqiec%2BezUApu0MeoY%2FOOVf73Be05g%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211211T200309Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6LO6VPIVFB7FL6VB%2F20211211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5d72d4efd203adc87b42dd65daebf8d8c5758e934b2ae552f12b29438d4eae66"
                             className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                             alt=""/>
                    </div>

                    <div className="bg-white inline-block h-10 w-10 rounded-full ring-2 ring-white flex items-center justify-center">
                        <TwitterIcon className="text-black" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="font-bold text-xl">Rokas Rudzianskas</span>
                    <span>@byRookas</span>
                </div>
            </div>

            <div className="max-w-xl flex items-center text-center mt-10">
                <span className="text-xl text-gray-300">
                    I've been waiting for something to encourage progressive enhancement in the email writing space
                    *forever* and Brainlyemails truly is so much more. Proving we don't need to sacrifice email writing tab or
                    choose SSG for a lightning fast, accessible UI, and the DX makes it all too easy 🤤
                </span>
            </div>
        </div>
    );
};

export default Comment;

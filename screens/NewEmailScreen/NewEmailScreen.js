import React from 'react';
import Header from "../../components/DashboardComponents/partials/Header";
import Footer from "../../components/WelcomeScreen_Components/Footer/Footer";
import TopPart from "../../components/NewEmailScreen_Components/EmailFeaturesContainer/TopPart";
import TopPagination from "../../components/NewEmailScreen_Components/EmailFeaturesContainer";
import {useRecoilState} from "recoil";
import {handleDiscardEmailModal} from "../../contentManagement/atoms/HandleModalStates/HandleModalStates";

const NewEmailScreen = () => {

    const [handleDiscardEmailModalState, setHandleDiscardEmailModalState] = useRecoilState(handleDiscardEmailModal);

    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <Header />
            <TopPart />
            {!handleDiscardEmailModalState ? <Footer /> : null}


            {handleDiscardEmailModalState && (
                <DiscardModal />
            )}
        </div>
    );
};

export default NewEmailScreen;

export const DiscardModal = () => {
const [handleDiscardEmailModalState, setHandleDiscardEmailModalState] = useRecoilState(handleDiscardEmailModal);

return (
<div>
        <div
            className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
            id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative mt-[10rem] py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

                    <div className="flex items-center justify-start w-full">
                        <button
                            className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit
                        </button>
                        <button
                            className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                            onClick={() => setHandleDiscardEmailModalState(!handleDiscardEmailModalState)}>
                            >
                            Cancel
                        </button>
                    </div>
                    <div
                        className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                        onClick="modalHandler()">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close"
                             className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24"
                             strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1={18} y1={6} x2={6} y2={18}/>
                            <line x1={6} y1={6} x2={18} y2={18}/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

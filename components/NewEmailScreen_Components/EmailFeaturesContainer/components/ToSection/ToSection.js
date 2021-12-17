import React, {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const ToSection = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className=" py-4  border-b-[1px] border-indigo-200">
            <div className="flex flex-row items-center">
                <div className=" px-10 flex flex-1">
                    <div>
                        <p className="text-gray-400">To:</p>
                    </div>

                    <div className="ml-[58px]">
                        <p className="text-gray-600">1 recipient</p>
                        {!show && <p className="text-gray-800 mt-4">Everyone subscribed</p>}
                    </div>
                </div>

                <div onClick={handleShow} className="ml-7 cursor-pointer mr-7">
                    <ExpandMoreIcon className="text-gray-500" />
                </div>
            </div>

            {show && (
                <div>
                   <div>
                       <div className=" mx-10 pl-[5rem] mt-5 py-1 mb-5 flex flex-row items-center bg-gray-100 rounded-sm">
                           <CheckBoxIcon className="text-indigo-500 mr-2" />
                           <p className="text-gray-800">Everyone subscribed</p>
                       </div>
                   </div>

                    <div className="flex flex-row items-center  bg-gray-100 border-t-[1px] border-b-[1px] py-2 border-indigo-200">
                        <div className="bg-gray-100 py-3 flex flex-row  flex-1">
                            <p className="pl-[120px] text-gray-600">
                                More specific?

                            </p>
                            <p className="ml-2 text-indigo-500 hover:underline transition duration-150 ease-in-out cursor-pointer">
                                + Add filters
                            </p>

                        </div>
                        <div className="flex flex-row items-center bg-gray-100">
                            <div onClick={handleShow} className="border border-1 border-indigo-500 px-2 rounded-sm hover:bg-indigo-100 transition duration-150 ease-in-out cursor-pointer">
                                <p className="text-sm text-gray-800 font-semibold">DONE</p>
                            </div>
                            <div className="text-gray-600 ml-3 pr-5">
                                <p>or hit TAB</p>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ToSection;

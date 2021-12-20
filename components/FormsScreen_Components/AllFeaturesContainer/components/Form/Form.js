import React from 'react';

const Form = ({form}) => {
    return (
        <div className="bg-white mt-5 py-6 px-10 border border-1 border-indigo-500 rounded-sm hover:bg-gray-100 cursor-pointer transition duration-150 ease-in-out">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row items-center">
                            <p className="font-semibold">{form.title}</p>
                            {form.isDraft && (
                                <div className="bg-gray-200 rounded-full ml-5 px-2">
                                    <p className="text-xs text-gray-400 font-bold">DRAFT</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="text-gray-800">
                        {form?.body}
                    </p>
                </div>

                <div className="flex flex-col flex-1">

                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex flex-row">
                        <p className="flex flex-1">Subscribed</p>
                        <p className="flex">0%</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                            <div className="bg-indigo-500 h-1 rounded-full" style={{width: '1%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;

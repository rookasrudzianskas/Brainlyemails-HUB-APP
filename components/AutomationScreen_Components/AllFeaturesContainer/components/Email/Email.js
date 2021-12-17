import React from 'react';

const Email = ({email}) => {
    return (
        <div className="bg-white mt-5 py-6 px-10 border border-1 border-indigo-500 rounded-sm hover:bg-gray-100 cursor-pointer transition duration-150 ease-in-out">
            <div className="flex flex-col">
                <div>
                    <div className="flex flex-row items-center">
                        <p className="font-semibold">{email.title}</p>
                        {email.isDraft && (
                            <div className="bg-gray-200 rounded-full ml-5 px-2">
                                <p className="text-xs text-gray-400 font-bold">DRAFT</p>
                            </div>
                        )}
                    </div>
                </div>
                <p className="text-gray-800">
                    {email?.body}
                </p>
            </div>
        </div>
    );
};

export default Email;

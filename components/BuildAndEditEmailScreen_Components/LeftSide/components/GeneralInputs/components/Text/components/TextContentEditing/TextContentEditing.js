import React from 'react';

const TextContentEditing = () => {
    return (
        <div className="h-[35rem] p-6">
            <div className="flex flex-col">
                <div className="flex flex-row mb-4">
                    <p className="text-md text-indigo-500 font-semibold mb-1 flex flex-1">Content</p>
                    <div className="bg-indigo-300  text-gray-100 rounded-full px-1 flex items-center justify-center hover:bg-indigo-500 cursor-pointer transition duration-150 ease-in-out">
                        <p className="text-xs">MARKDOWN SUPPORT</p>
                    </div>
                </div>
                <div className="flex">
                    <textarea
                        className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        placeholder="Type something for the content"
                        value={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium fugit placeat quos dicta, ullam deserunt tenetur nobis dolore ratione voluptate commodi veniam odio cum reiciendis reprehenderit fuga distinctio, quasi alias?'}
                        rows='5'
                        style={{resize: 'none' }}
                    />
                </div>

            </div>
        </div>
    );
};

export default TextContentEditing;

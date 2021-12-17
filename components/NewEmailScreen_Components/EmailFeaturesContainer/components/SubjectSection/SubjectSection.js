import React from 'react';

const SubjectSection = () => {
    return (
        <div className="px-10 py-5">
            <div className="flex flex-row items-center">
                <div>
                    <p className="text-gray-400">Subject:</p>
                </div>

                <div className="ml-2 flex flex-1">
                    <input type="text" className="w-full outline-none" placeholder="What did you ship lately?" style={{border: 'none', outline: 'none', outlineWidth: 0}} />
                </div>

            </div>
        </div>
    );
};

export default SubjectSection;

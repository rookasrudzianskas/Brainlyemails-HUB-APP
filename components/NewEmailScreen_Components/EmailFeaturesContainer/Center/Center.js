import React from 'react';
import FromSection from "../components/FromSection";
import ToSection from "../components/ToSection";
import SubjectSection from "../components/SubjectSection";

const Center = () => {
    return (
        <div className="flex w-[50rem] flex flex-col bg-white border border-1 border-indigo-500 rounded-sm">
            <FromSection />
            <ToSection />
            <SubjectSection />
        </div>
    );
};

export default Center;

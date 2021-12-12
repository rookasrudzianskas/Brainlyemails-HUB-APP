import React from 'react';
import TwitterCard from "../TwitterCard/TwitterCard";
import {USERS} from "../../../data/TwitterCards/people";

const HorizontalScrollableList = () => {
    return (
        <div className="mt-16">
        {/*    create horizontal scrollable list */}
            <div
                className="flex overflow-x-scroll pb-10 scrollbar scrollbar-thumb-gray-900 scrollbar-track-black"
            >
                <div
                    className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 "
                >
                    <div className="inline-block px-3 flex flex-row">
                        {USERS.map((user, index) => {
                            return (
                                <TwitterCard
                                    key={index}
                                    user={user}
                                />
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollableList;

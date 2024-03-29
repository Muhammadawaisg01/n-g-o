
// FileName: Navb.js 

import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <button
                onClick={() => {
                    setLibraryStatus(!libraryStatus);
                }}
            >
                <h4>Library</h4>
            </button>
        </nav>
    );
};

export default Nav; 
import React from "react";


const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input
                className="pa3 ba b--blue bg-lightest-yellow"
                type="search"
                placeholder="Search name"
                onChange = { searchChange }

            />
        </div>
    );
}

export default SearchBox;

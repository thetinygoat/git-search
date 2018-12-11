import React from 'react';

const searchbar = (props) => {
    return (
        <div className="flex flex-col text-center my-20">
            <form onSubmit={props.submit}>
                <input type="text" placeholder="Github Username" onChange={props.change} className="shadow appearance-none border rounded w-1/2 py-4 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"></input>
                <button type="submit" className="bg-blue hover:bg-blue-dark text-white font-bold py-4 px-4 rounded mx-2">Search</button>
            </form>
        </div>
    );
}

export default searchbar;
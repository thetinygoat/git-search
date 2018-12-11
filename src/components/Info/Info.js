import React from 'react'

const info = (props) => {
    return (
        <div className="flex container w-1/2 mx-auto">
            <img src={props.avatar_url} alt="profile image" className="w-1/2 rounded shadow-inner"></img>
            <div className="flex flex-col text-left px-4">
                <p className="my-1"><span className="text-grey-darker font-bold">Name -  </span>{props.name}</p>
                <p className="my-1"><span className="text-grey-darker font-bold">Username -  </span>{props.username}</p>
                {/* <a href={props.github_link} className="block">Github profile</a> */}
                <p className="my-1"><span className="text-grey-darker font-bold">Repos -  </span>{props.repos}</p>
                <p className="my-1"><span className="text-grey-darker font-bold">Bio -  </span>{props.bio}</p>
            </div>
        </div>
    )
}

export default info;
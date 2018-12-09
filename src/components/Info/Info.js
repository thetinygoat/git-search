import React from 'react'

const info = (props) => {
    return (
        <div>
            <p>name : {props.name}</p>
            <p>username : {props.login}</p>
            <a href={props.prof_page}>Github Profile</a>
            <p>public repos : {props.repos}</p>
            <img src={props.avatar}></img>
        </div>
    )
}

export default info;
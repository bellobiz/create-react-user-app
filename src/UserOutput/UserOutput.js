import React from "react";

const userOutput = props => {
    return (
        <div>
            <p>My username account is: {props.username}</p>
            <p>I am {props.age} years old</p>
        </div>
    );
};

export default userOutput;
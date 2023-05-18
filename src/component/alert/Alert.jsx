import React from "react";

function Alert() {
    const handleClick = () => {
        if (window.confirm("Are you sure you want to sign up?")) {
            console.log("User clicked on Yes");
        } else {
            console.log("User clicked on Cancel");
        }
    };

    return <button onClick={handleClick}>SIGNUP</button>;
}

export default Alert;

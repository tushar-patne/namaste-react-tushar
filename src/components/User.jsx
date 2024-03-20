import { useState } from "react";

const User = ({name, insta, contact}) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);

    return (
        <div className="user-card">
            <h2>count = {count}</h2>
            <h2>count 2 = {count2}</h2>
            <h3>{name}</h3>
            <h3>inst - {insta}</h3>
            <h3>contact - {contact}</h3>
        </div>
    )
}

export default User;
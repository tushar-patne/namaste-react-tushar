import { useState, useEffect } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => {
            console.log("online event listner ");
            setOnlineStatus(true);
        })
        window.addEventListener('offline', () => {
            console.log("online event listner ");
            setOnlineStatus(false);
        })
    }, [])

    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;
import { useEffect, useState } from "react"

const useShowOffline = () => {

    const [showOffline, setOffline] = useState(false);
    useEffect(() => {
        window.addEventListener('online', () => {
            setOffline(false)
        });
        window.addEventListener('offline', () => {
            setOffline(true)
        })
    }, []);

    return showOffline;
}

export default useShowOffline;
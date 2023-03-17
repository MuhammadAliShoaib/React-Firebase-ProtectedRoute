import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../config/firebasemethods"

function ProtectedRoute({ Component }) {

    const [loading, setLoading] = useState(false);
    let navigate = useNavigate()

    useEffect(()=>{
        setLoading(true);
        checkAuth()
            .then((uid) => {
            setLoading(false)
            console.log(uid, "already logged in")
        })
            .catch((err) => {
                setLoading(false)
                console.log(err)
                navigate('/login')
            })
    }, []);

    return <>{loading ? <h1>Loading...</h1 > : <Component />}</>;
}

export default ProtectedRoute;
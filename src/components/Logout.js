import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = ({handleLogout}) => {

    useEffect(() => {
        handleLogout()
    }, [])
    return (
        <div>
        <Redirect to="/" />
        </div>
    );
}

export default Logout;
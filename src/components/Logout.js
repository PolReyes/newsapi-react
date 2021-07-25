import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = ({handleLogout}) => {

    useEffect(() => {
        handleLogout()
    }, [])
    return (
        <>
        <Redirect to="/" />
        </>
    );
}

export default Logout
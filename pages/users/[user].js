import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const User = () => {
    const [ user, setUser ] = useState(null); 
    const router = useRouter();
    const id = router.query.user;
    useEffect(() => {
        const load = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const fetchedUser = await response.json();
            console.log(fetchedUser)
            setUser(fetchedUser);
        }
        load();
    }, [id])
    return (
        <>{`Helloooo ${user && user.name}`}</>
    )
}

export default User;
import React from 'react'
import User from '../components/user';

const Users = ({users}) => {
    return (
        <ul>
        {users.map(user => <User key={user.id} user={user}></User>)}
        </ul>
    )
}

export const getStaticProps = async () => {
    const usersData = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersData.json();

    return {
        props: {
            users
        }
    }
}
export default Users

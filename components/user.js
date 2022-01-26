export default function User({ user }){
    return (
        <div>
            <span>Name: {user.name}</span>
            <span>Email: {user.email}</span>
        </div>
    )
}
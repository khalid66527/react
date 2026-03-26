import { use } from "react";

export default function Users({fachUsers}){
    const users = use(fachUsers);

    console.log(users);

    return(
        <div className="cart">
            <p>Uerse: {users.length}</p>
        </div>
    )
}
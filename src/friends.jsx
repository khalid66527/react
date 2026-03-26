import { use } from "react";

export default function Friends({friendPromise}){
    const friends = use(friendPromise);
    console.log(friends);
    return(
        <div className="cart">
            <h2>friends: {friends.length}</h2>
        </div>
    )
}
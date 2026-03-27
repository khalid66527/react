import { use } from "react";
import Friend from "./friend";

export default function Friends({friendPromise}){
    const friends = use(friendPromise);
    console.log(friends);
    return(
        <div className="cart">
            <h2>friends: {friends.length}</h2>
            
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}
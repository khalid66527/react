export default function Friend({friend}){
    console.log(Friend);
    const {name} = friend;
    return (
        <div className="cart">
            <h4>Name : {name}</h4>
        </div>
    )
}
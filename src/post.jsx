export default function Post({post}){
    return (
        <div className="cart">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}
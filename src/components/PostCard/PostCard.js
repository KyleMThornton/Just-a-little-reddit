import './PostCard.css'

const PostCard = (props) => {
    return(
        <box>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </box>
        // <div>
        //     {props.map(prop =>
        //         <box>
        //             <h2>{prop.title}</h2>
        //             <p>{prop.content}</p>
        //         </box>
        //     )}
        // </div>
    )
}

export default PostCard;
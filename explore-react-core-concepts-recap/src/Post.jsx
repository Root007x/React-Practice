import './post.css'

export default function Post({post}){
    const {title, id} = post;
    return (
        <div className='post'>
            <h5>Title : {title}</h5>
            <p>UserId : {id}</p>
        </div>
    )
}
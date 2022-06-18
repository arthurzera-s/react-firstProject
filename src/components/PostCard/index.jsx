import './style.css';

export const PostCard = ({id, title, body, cover}) => (
    <div className='post'>
        <img src={cover} alt={title}></img>
        <div key={id} className="post-content">
            <h3>{title} - {id}</h3>
            <p>{body}</p>
        </div>
    </div>  
);
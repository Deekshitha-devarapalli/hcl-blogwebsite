import {formatISO9075} from "date-fns";
import { Link } from "react-router-dom";

export default function Post({_id,title, summary,createdAt, cover,content,author}){
  console.log('Cover prop:', cover);
  //const baseUrl = 'http://localhost:4000';
 return(
    
    <div className="post">
        <div className='image'>
          <Link to={`/post/${_id}`}>
            <img src={'http://localhost:4000/'+cover} alt="img" />
        </Link>
        </div>
        <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>  
          <p className="deets">
            <a className="author">{author.username}</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className="overview">{summary}</p>
        </div>  
      </div>
     

  );
    
 }
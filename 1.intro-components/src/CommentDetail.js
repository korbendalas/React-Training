import React from 'react';
//import faker from 'faker';



const CommentDetail=(props)=>{
   
 
    
  return(

        <div className="comment">
                <a href="/" className="avatar">
                     <img src={props.avatar} alt="Avatar image"/>
                </a>
                 <div className="content">
                        <a href="/" className="author">
                       {props.author}
                            {/* {faker.name.firstName()} */}
                        </a>
                        <div className="metadata">
                             <span className="date">{props.timeAgo}</span>
                        </div>
                        <div className="text">
                        {props.article}
                  
                        </div>
                 </div>
        
            </div>

    );
}
export default CommentDetail;
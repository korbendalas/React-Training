import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App =()=>{


//const avatar = faker.image.avatar();
//const article = faker.lorem.words();
    return (
        <div className="ui container comments">
<ApprovalCard>    
    <CommentDetail author="Sam" timeAgo="Today at 5:53 h" 
    avatar={faker.image.avatar()} article={faker.lorem.words()} />
</ApprovalCard>

<ApprovalCard>
    <CommentDetail author="Alex" timeAgo="Today at 12:22 h" 
 avatar={faker.image.avatar()} article={faker.lorem.words()}/>
  </ApprovalCard>

<ApprovalCard>
<CommentDetail author="Jane" timeAgo="Today at 15:11 h"
 avatar={faker.image.avatar()} article={faker.lorem.words()}/>

</ApprovalCard>

            


            
  </div>

    );    
}

ReactDOM.render(<App/>,document.getElementById("root"));
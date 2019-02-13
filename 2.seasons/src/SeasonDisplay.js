import React from 'react';
import './SeasonDisplay.css';
const seasonConfig={
    summer:{
        text:"Let's hit the beach!",
        iconName:'sun'
    },
    winter:{
        text:"Brrrr it's chilly",
        iconName:'snowflake'

    }
}

console.log(seasonConfig.winter);

const getSeason=(lat, month)=>{
if(month >2 && month<9){
   return lat> 0 ? 'summer':'winter';
}else{ return lat>0 ? 'winter':'summer'; }

};


const SeasonDisplay =(props)=>{

const season = getSeason(props.lat, new Date().getMonth());
const{ text,iconName}=seasonConfig[season];
// console.log(season);
// const text=season === 'winter'? 'Brrrr it\'s chilly':'Let\'s hit the beach!';
//   const icon= season==='winter'?'snowflake':'sun';

return (
    <div>
        <i className={`icon-left massive icon ${iconName}`}></i>
       <h1 className="weather-text"> {text}</h1>
       <i className={`icon-right massive icon ${iconName}`}></i>
    </div>); 
};

export default SeasonDisplay;
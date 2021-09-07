import React from "react";

function Clock({ loggedIn }) {
  let time = new Date
  let currentHour = time.getHours()
  if(loggedIn === false){return null} else {
  if(currentHour  < 12){
    return <p>Good Morning!</p>
  } else if (currentHour > 18){
    return <p>Good Evening!</p>
  } else {
    return <p>Good Afternoon!</p>
  }
}}
  

export default Clock;

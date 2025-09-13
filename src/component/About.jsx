import React from 'react'

const About = (info) => {
  let card={
    margine:"12px",
    width:"140px",
    textAlign:"Center",
    border:"1px solid black",
    padding:"12px:",
    boxShadow: " 1px 1px 3px"
  }
    return<>
      <div style={card}>
        <img src={info.img} style={{width:"140px"}}></img>
        <p><b>{info.proTittle}</b></p>
        <p><button>BUY NOW</button></p>
      </div>
    </>
  
}

export default About

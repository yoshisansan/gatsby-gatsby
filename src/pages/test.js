import React from 'react';
import {navigate} from 'gatsby';
import Header from "../components/Header";

const Test = () => (
  <div>
    <Header></Header>
    <h1>This is the Test</h1>
    <h1>This is the Test</h1>
    <button onClick={()=>navigate("/")}>Navigate to Home</button>
  </div>
)

export default Test;
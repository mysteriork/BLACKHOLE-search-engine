import React from "react";
import { Link } from "react-router-dom";
import "../SEstyle.css";
function Home() {
  return (
    <div id="webdiv">
      <h1 className="webheading"> WELCOME TO BLACKHOLE  </h1>
      <section className="websec">
        <button className="webbtn">
          <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif",fontSize:"x-large",letterSpacing:"3px"}} to={"/searchpage"}>Click to Enter</Link>
        </button>
      </section>
    </div>
  );
}

export default Home;

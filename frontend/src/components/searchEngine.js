import React from "react";
import img02 from "../images/bh.jpg";
import img03 from "../images/blackline.png";
import img04 from "../images/github.png";
import "../SEstyle.css";
import { useState } from "react";
import axios from "axios";

export default function SE() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [bool, setBool] = useState(false);

  async function submit(e) {
    e.preventDefault();

    setBool(true);
    try {
      const response = await axios.get(
        "https://blackhole-search-engine.onrender.com/search",
        {
          params: {
            name: name,
          },
        }
      );

      if (response.data === "fail") {
        alert("Failed");
      } else {
        setData(response.data);
      }
      setName("");
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred while fetching the data.");
    }
    setBool(false);
  }

  const crawl = async (url) => {
    console.log("crawler clicked");
    if (!url) console.log("url required at Ui");

    await axios.post("https://blackhole-search-engine.onrender.com/crawl", {
      url,
    });
  };

  return (
    <div className="Body">
      <div className="InnerBody">
        <img src={img02} alt="image" className="blackhole" />

        <form className="form" onSubmit={submit}>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="txt"
            placeholder="Search here ..."
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <div className="logo">
        <img src={img03} alt="image" className="logoimg" />
      </div>
      {bool && (
        <p
          style={{
            color: "black",
            fontSize: "x-large",
            marginTop: "40px",
            fontWeight: "bold",
            letterSpacing: "5px",
            marginInline: "auto",
          }}
        >
          Loading ...{" "}
        </p>
      )}
      <div className="innerbody2">
        <div className="showdata">
          {data &&
            data.map((e) => (
              <section className="section" key={e._id}>
                <br />
                <h3 id="titless">{e.Title}</h3>
                <a
                  href={e.Url}
                  target="_blank"
                  className="link"
                  onClick={() => crawl(e.Url)}
                >
                  {e.Url}
                </a>
                <p className="desc">{e.Description}</p>
              </section>
            ))}
        </div>
      </div>
      <div className="footer">
        <h3 id="copyright">All rights are Reserved || &copy; </h3>
        <div className="foot1">
          <h3
            style={{
              color: "whitesmoke",
              fontFamily: "calibri",
              letterSpacing: "4px",
            }}
          >
            Contact Us 💬{" "}
          </h3>
          <div className="github">
            <img
              style={{ height: "15px", width: "15px" }}
              src={img04}
              alt="git"
            />
            <a href="https://github.com/mysteriork" target="_blank">
              Github
            </a>
          </div>

          <li>✉️ Email : callmerachit145@gmail.com</li>
          <li>📞 Phone : +123 456 7890</li>
        </div>
      </div>
    </div>
  );
}

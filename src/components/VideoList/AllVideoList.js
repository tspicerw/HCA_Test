import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import moment from "moment";

const AllVideoList = (props) => {
  const [data, setData] = useState(null);
  const [video, setVideo] = useState("TWW4w4_c8og");
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    fetch("videos")
    .then((res) => res.json())
    .then((d) => {
      console.log(d)
      setData(d.items);
     
      setNextPageToken(d.nextPageToken)
    });
    
  });

  //change the embedded video based on the list clicked
  const handleClick = (event) => {
    setVideo(event.currentTarget.id)
  }
  return (
    <div>
     
      <ul id="video-list-container">
        <li className="video-list-items"> <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allowFullScreen title="HCA Video"></iframe></li>
        {!data
          ? "Loading..."
          : data.map((d) => {
              return (
                <li key={d.id.videoId} id={d.id.videoId} className="video-list-items" onClick={handleClick}>
                    <div>
                  <img alt='Youtube thumbnail for HCA Covid19 Information'src={d.snippet.thumbnails.medium.url} />
                  </div>
                  <div id="video-info">
                    <h3>{d.snippet.title}</h3>
                    <p>{d.snippet.description}</p>
                    <span>Publish Date: {moment(d.snippet.publishedAt).format("MMM Do YY")}</span>
                  </div>
                </li>
              );
            })}
      </ul> 
    </div>
  );
};

export default AllVideoList;

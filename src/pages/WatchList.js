import {
  faMinusCircle,
  faPlusCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/ContextProvider";

const WatchList = () => {
  const { data, setData } = useContext(UserContext);
  const handleOnClick = (item) => {
    let result = data.filter(function (element) {
      if (element.Title !== item.Title) return element;
    });
    setData(result);
  };
  return (
    <div>
      {" "}
      <div className="watch-list-info">
        <p className="isempty">Your watch list is empty</p>
        <Link to="/" className="btn">
          <FontAwesomeIcon icon={faPlusCircle} />
          <p style={{ marginLeft: "10px" }} className="letsadd">
            Let's add movies
          </p>
        </Link>
      </div>
      <div className="list-of-movies watch-list-of-movies">
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <img src={item.Poster} alt={item.Title} className="poster-img" />
              <div className="right-to-img">
                <span className="title-wrapper">
                  <h2 className="movie-title">{item.Title} </h2>
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="star-icon"
                      color="#FFDF00"
                    />
                    <span style={{ marginLeft: "5px" }}>{item.imdbRating}</span>
                  </span>
                </span>
                <div className="watchlist" onClick={() => handleOnClick(item)}>
                  <p>{item.Runtime}</p>
                  <p>{item.Genre}</p>
                  <div className="addto-watchlist">
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      className="plus-icon"
                    />
                    <span>remove</span>
                  </div>
                </div>
                <p className="movie-plot">{item.Plot}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WatchList;

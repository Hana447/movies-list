import React, { useContext, useState } from "react";
import {
  faStar,
  faPlusCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "./ContextProvider";

const CheckIfItIsaddToWatchList = ({ item, list, handleOnClick }) => {
  if (list.length > 0) {
    let flag = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].Title == item.Title) {
        flag = 1;
        return (
          <div className="watchlist">
            <p>{item.Runtime}</p>
            <p>{item.Genre}</p>
            <div className="addto-watchlist">
              <FontAwesomeIcon icon={faCheck} className="plus-icon" />
              <span>added</span>
            </div>
          </div>
        );
      }
    }
    if (flag === 0)
      return (
        <div className="watchlist" onClick={() => handleOnClick(item)}>
          <p>{item.Runtime}</p>
          <p>{item.Genre}</p>
          <div className="addto-watchlist">
            <FontAwesomeIcon icon={faPlusCircle} className="plus-icon" />
            <span>Watchlist</span>
          </div>
        </div>
      );
  } else
    return (
      <div className="watchlist" onClick={() => handleOnClick(item)}>
        <p>{item.Runtime}</p>
        <p>{item.Genre}</p>
        <div className="addto-watchlist">
          <FontAwesomeIcon icon={faPlusCircle} className="plus-icon" />
          <span>Watchlist</span>
        </div>
      </div>
    );
};

const ListOfMovies = ({ searchResult }) => {
  const movies=searchResult ? searchResult :JSON.parse(localStorage.getItem('movies'))
  console.log(movies)
  const { setData } = useContext(UserContext);
  const [list, setList] = useState([]);

  const handleOnClick = (item) => {
    setList((l) => [...l, item]);
    setData((data) => [...data, item]);
  };

  if (Array.isArray(movies))
    if (movies.length > 0)
      return (
        <div className="list-of-movies">
          <div>
            <ul>
              {movies.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.Poster}
                    alt={item.Title}
                    className="poster-img"
                  />
                  <div className="right-to-img">
                    <span className="title-wrapper">
                      <h2 className="movie-title">{item.Title} </h2>
                      <span>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="star-icon"
                          color="#FFDF00"
                        />
                        <span style={{ marginLeft: "5px" }}>
                          {item.imdbRating}
                        </span>
                      </span>
                    </span>
                    {
                      <CheckIfItIsaddToWatchList
                        item={item}
                        list={list}
                        handleOnClick={handleOnClick}
                      />
                    }
                    <p className="movie-plot">{item.Plot}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    else return;
};

export default ListOfMovies;

import React, { useEffect, useState, useRef } from "react";
import NewsArticle from "./NewsArticle";
import "../newsapp.css";
import { APIKEY } from "./Api";

const Search = () => {
  const [articles2, setArticles2] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Technology");
  const [show, setShow] = useState(false);
  const searchRef = useRef(null);


  useEffect(() => {
    const searchApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?apiKey=${APIKEY}&language=en&q=${search}&page=1&pageSize=12&category=${category}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles2(data.articles);
    };
    searchApi();
  }, [search, category]);

  useEffect(() => {
    const clickout = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", clickout);
    return () => {
      document.removeEventListener("mousedown", clickout);
    };
  }, [searchRef]);

  return (
    <>
      <div>
        <div className="searchbar1" ref={searchRef}>
          <input
            type="search"
            placeholder="Search News"
            onClick={() => {
              setShow(true);
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <select
            value={category}
            className="drop"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="general">General</option>
          </select>
        </div>

        {!articles2 ? (
          articles2 == null ? (
            " "
          ) : (
            console.log("No Data Found!!!")
          )
        ) : show === false ? (
          " "
        ) : (
          <div className="clicked">
            <div className="info">
              <h2 className="search">
                <i className="fa fa-solid fa-street-view"></i>
                <i className="fa fa-light fa-box-archive"></i>
              </h2>
            </div>
            <div
              className="container my-4"
              style={{ textAlign: "center", marginTop: "0px" }}
            >
              <h3>Your Search Results for {search}</h3>
              <div className="row">
                {articles2.map((article, index) => (
                  <div className="col-md-4" key={index}>
                    <NewsArticle
                      title={article.title ? article.title : ""}
                      imageUrl={article.urlToImage ? article.urlToImage : ""}
                      url={article.url ? article.url : ""}
                      description={
                        article.description
                          ? article.description.slice(0, 50)
                          : ""
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;

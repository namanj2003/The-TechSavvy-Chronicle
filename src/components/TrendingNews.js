import React from "react";
import NewsArticle from "./NewsArticle";
import "../newsapp.css";
import { useState, useEffect } from "react";
import Loader1 from "./Loader";
import { APIKEY } from "../Api";
function Trending() {
  const [articles, setarticles] = useState([]);
  const [page, setPage] = useState(1);



  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const trending = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${APIKEY}&language=en&page=${page}&pageSize=12`
        );
        const data = await trending.json();
        setarticles(data.articles);
      } catch (error) {
        console.log("Unable to fetch API", error);
      }
    };
    fetchArticles();
  }, [page]);

  const previousClick = () => {
    console.log("Previous button clicked");
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  const nextClick = () => {
    console.log("Next button clicked");
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div>
        <div className="container my-4" style={{marginTopTop:"0px!important"}}>
          <h3>Top Headlines</h3>
          {articles && articles.length > 0 ? (
            <>
              <div className="row" >
                {articles.map((article, index) => (
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
              <div className="container d-flex justify-content-between">
                <button
                  disabled={page <= 1}
                  type="button"
                  className="btn btn-light"
                  onClick={previousClick}
                >
                  &larr; Previous
                </button>
                <button
                disabled={page+1 > Math.ceil(articles.totalResults/12)}
                  type="button"
                  className="btn btn-light"
                  onClick={nextClick}
                >
                  Next &rarr;
                </button>
              </div>
            </>
          ) : (

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
              <p><Loader1 />Loading...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Trending;

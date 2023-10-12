import React from "react";
import NewsArticle from "./NewsArticle";
import "../newsapp.css";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Loader1 from "./Loader";
import { APIKEY } from "./Api";
function AllNews() {
  const [articles1, setarticles1] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchArticles1 = async () => {
      try {
        const allnews1 = await fetch(
          `https://newsapi.org/v2/everything?apiKey=${APIKEY}&language=en&q=technology&sortby=publishedAt&page=${page}&pageSize=12`
        );
        const data1 = await allnews1.json();
        setarticles1(data1.articles);
      } catch (error1) {
        console.log("Unable to fetch API", error1);
      }
    };
    fetchArticles1();
  }, [page]);
  const previousClick = () => {
    console.log("Previous button clicked")
    setPage(page - 1);
    window.scrollTo(0, 0);
  }
  const nextClick = () => {
    console.log("Next button clicked")
    setPage(page + 1);
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <div className="container my-4" style={{marginTopTop:"0px"}}>
          <h3>Today's News</h3>
          {articles1 && articles1.length > 0 ? (
            <>
              <div className="row">
                {articles1.map((article1, index1) => (
                  <div className="col-md-4" key={index1}>
                    <NewsArticle
                      title={article1.title ? article1.title : ""}
                      imageUrl={article1.urlToImage ? article1.urlToImage : ""}
                      url={article1.url ? article1.url : ""}
                      description={
                        article1.description
                          ? article1.description.slice(0, 50)
                          : ""
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" class="btn btn-light" onClick={previousClick}>
                  &larr; Previous
                </button>
                <button  disabled={page+1 > Math.ceil(articles1.totalResults/16)} type="button" class="btn btn-light" onClick={nextClick}>
                  Next &rarr;
                </button>
              </div>
            </>
          ) :
            (<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
              <p><Loader1 />Loading...</p>
            </div>
            )}
        </div>

      </div>
    </>
  );
}

export default AllNews;
 
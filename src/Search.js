import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  const [query, setQuery] = useState(null);
  const [res, setRes] = useState(null);
  const [bottone, setBottone] = useState(false);
  const [maxRes, setMaxRes] = useState(10);

  useEffect(() => {
    async function getData() {
      if (!query) return;
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite&maxResults=${maxRes}`
      )
        .then((res) => res.json())
        .then((res) => setRes(res.items));
      console.log(res);
    }

    getData();
  }, [query, maxRes]);

  if (!res)
    return (
      <div className="topnav">
        <input
          type="text"
          placeholder="Search"
          onChange={(text) => {
            setQuery(text.target.value);
          }}
        ></input>
        <span
          className="d-inline-block"
          tabIndex="0"
          data-toggle="tooltip"
          title="Disabled tooltip"
        >
          <button
            onClick={() => setBottone(!bottone)}
            className="btn btn-primary"
            type="button"
          >
            Visualizza Griglia
          </button>
          <button
            onClick={() => setMaxRes(5)}
            className="btn btn-primary"
            type="button"
          >
            5
          </button>
          <button
            onClick={() => setMaxRes(10)}
            className="btn btn-primary"
            type="button"
          >
            10
          </button>
          <button
            onClick={() => setMaxRes(15)}
            className="btn btn-primary"
            type="button"
          >
            15
          </button>
          <button
            onClick={() => setMaxRes(20)}
            className="btn btn-primary"
            type="button"
          >
            20
          </button>
        </span>
      </div>
    );

  return (
    <>
      <div className="topnav">
        <input
          type="text"
          placeholder="Search"
          onChange={(text) => {
            setQuery(text.target.value);
            console.log(query, res);
          }}
        ></input>
        <span
          className="d-inline-block"
          tabIndex="0"
          data-toggle="tooltip"
          title="Disabled tooltip"
        >
          <button
            onClick={() => setBottone(!bottone)}
            className="btn btn-primary"
            type="button"
          >
            Visualizza Griglia
          </button>
          <button
            onClick={() => setMaxRes(5)}
            className="btn btn-primary"
            type="button"
          >
            5
          </button>
          <button
            onClick={() => setMaxRes(10)}
            className="btn btn-primary"
            type="button"
          >
            10
          </button>
          <button
            onClick={() => setMaxRes(15)}
            className="btn btn-primary"
            type="button"
          >
            15
          </button>
          <button
            onClick={() => setMaxRes(20)}
            className="btn btn-primary"
            type="button"
          >
            20
          </button>
        </span>
      </div>
      {bottone ? (
        <section className="py-4 container">
          <div className="">
            {res.map((book) => (
              <li
                style={{
                  listStyleType: "none",
                }}
                key={book.id}
              >
                <div className="col-11 col-md-6 mx-5 mb-4 card p-0 shadow">
                  {/* <Link to="/">{book.volumeInfo?.title}</Link> */}
                  <img
                    src={
                      book.volumeInfo?.imageLinks?.smallThumbnail
                        ? book.volumeInfo?.imageLinks?.smallThumbnail
                        : "https://geodis.com/my/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=W39cp7-6"
                    }
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {book.volumeInfo?.title} </h5>
                    <p className="ellipsis">{book.volumeInfo?.description}</p>
                  </div>
                </div>
                <br />
              </li>
            ))}
          </div>
        </section>
      ) : (
        <section className="py-4 container">
          <div className="d-flex flex-wrap">
            {res.map((book) => (
              <li
                style={{
                  listStyleType: "none",
                }}
                key={book.id}
              >
                <div
                  className="col-11 col-md-6 mx-5 mb-4 card p-0 shadow"
                  style={{ width: "180px" }}
                >
                  {/* <Link to="/">{book.volumeInfo?.title}</Link> */}
                  <img
                    src={
                      book.volumeInfo?.imageLinks?.smallThumbnail
                        ? book.volumeInfo?.imageLinks?.smallThumbnail
                        : "https://geodis.com/my/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=W39cp7-6"
                    }
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {book.volumeInfo?.title} </h5>
                    <p className="ellipsis">{book.volumeInfo?.description}</p>
                  </div>
                </div>
                <br />
              </li>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Search;

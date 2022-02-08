import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Search() {
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
        <div className="form-row center2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search a book"
              onChange={(text) => {
                setQuery(text.target.value);
              }}
            ></input>
          </div>
        </div>
        <span
          className="d-inline-block"
          tabIndex="0"
          data-toggle="tooltip"
          title="Disabled tooltip"
        ></span>
        <div className="center">
          <button
            onClick={() => setBottone(!bottone)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            Griglia/Cards
          </button>
        </div>
        <div className="center">
          <button
            onClick={() => setMaxRes(5)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            5
          </button>
          <button
            onClick={() => setMaxRes(10)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            10
          </button>
          <button
            onClick={() => setMaxRes(15)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            15
          </button>
          <button
            onClick={() => setMaxRes(20)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            20
          </button>
        </div>
      </div>
    );

  return (
    <>
      <div className="topnav">
        <div class="form-row center2">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Search a book"
              onChange={(text) => {
                setQuery(text.target.value);
              }}
            ></input>
          </div>
        </div>
        <span
          className="d-inline-block"
          tabIndex="0"
          data-toggle="tooltip"
          title="Disabled tooltip"
        ></span>
        <div className="center">
          <button
            onClick={() => setBottone(!bottone)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            Griglia/Cards
          </button>
        </div>
        <div className="center">
          <button
            onClick={() => setMaxRes(5)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            5
          </button>
          <button
            onClick={() => setMaxRes(10)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            10
          </button>
          <button
            onClick={() => setMaxRes(15)}
            className="btn btn-primary"
            class="btn btn-success"
            type="button"
          >
            15
          </button>
          <button
            onClick={() => setMaxRes(20)}
            class="btn btn-success"
            className="btn btn-primary"
            type="button"
          >
            20
          </button>
        </div>
      </div>
      {bottone ? (
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Img</th>
              <th scope="col">Title</th>
              <br />
              <th scope="col">Description</th>
            </tr>
          </thead>
          {res.map((book) => (
            <tbody>
              <tr>
                <th scope="row">~</th>
                <td>
                  <img
                    src={
                      book.volumeInfo?.imageLinks?.smallThumbnail
                        ? book.volumeInfo?.imageLinks?.smallThumbnail
                        : "https://geodis.com/my/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=W39cp7-6"
                    }
                    className="card-img-top"
                  />
                </td>
                <td>{book.volumeInfo?.title}</td>
                <td>{book.volumeInfo?.author}</td>
                <td className="p ellipsis">{book.volumeInfo?.description}</td>
                <td>
                  <Link
                    type="button"
                    class="btn btn-success"
                    to={`details/${book.id}`}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <section className="py-4 container blackback">
          <div className="d-flex flex-wrap">
            {res.map((book) => (
              <li
                style={{
                  listStyleType: "none"
                }}
                key={book.id}
              >
                <div
                  className="col-14 col-md-11 mx-4 mb-4 card p-3 shadow"
                  style={{ width: "210px" }}
                >
                  <img
                    src={
                      book.volumeInfo?.imageLinks?.smallThumbnail
                        ? book.volumeInfo?.imageLinks?.smallThumbnail
                        : "https://geodis.com/my/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=W39cp7-6"
                    }
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.volumeInfo?.title}</h5>
                    <p className="p ellipsis">{book.volumeInfo?.description}</p>
                    <Link
                      type="button"
                      class="btn btn-success"
                      to={`details/${book.id}`}
                    >
                      Details
                    </Link>
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
}

export default Search;

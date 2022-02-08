import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Details() {
  const params = useParams();
  const [res, setBook] = useState(null);

  useEffect(() => {
    async function getBook() {
      if (!params) return;
      await fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
        .then((res) => res.json())
        .then(setBook);
    }
    getBook();
  }, []);

  if (!res) {
    return (
      <section className="py-4 container">
        <div className="d-flex flex-wrap">C a R i C a M e N T o ...</div>
      </section>
    );
  }
  return (
    <>
      <div className="topnav">
        <div class="form-row center2">
          <Link type="button" class="btn btn-success center2" to={`/`}>
            SEARCH
          </Link>
        </div>
      </div>

      <div class="card-group">
        <div class="card text-white bg-dark mb-3">
          <img className=""
            src={
              res.volumeInfo?.imageLinks?.thumbnail
                ? res.volumeInfo?.imageLinks?.thumbnail
                : "https://geodis.com/my/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=W39cp7-6"
            }
          />
        </div>
        <div class="card text-white bg-dark mb-3">
          <div class="card-header center">{res.volumeInfo?.title}</div>
          <div class="card-body center">
            <h5 class="card-title center">{res.volumeInfo?.authors}</h5>
            <p class="card-text">{res.volumeInfo?.description}</p>
          </div>
          <div class="card-footer text-muted center">
            <a
              href={
                res.volumeInfo?.infoLink
                  ? res.volumeInfo?.infoLink
                  : res.volumeInfo?.buyLink
              }
              class="btn btn-success"
            >
              Vai Allo Store
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

import Link from "next/link";

function shorten(text, maxLength = 50) {
  if (text && text.length > maxLength) {
    return text.substr(0, maxLength) + "...";
  }
  return text;
}

const MovieList = ({ movies = [] }) => (
  <>
    {movies.map(({ id, name, image, description, rating }) => (
      <div className="col-lg-4 col-md-6 mb-4" key={id}>
        <div className="card h-100">
          <Link href={`/movies/${id}`}>
            <a>
              <img className="card-img-top" src={image} alt="" />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href={`/movies/${id}`}>
                <a>{name}</a>
              </Link>
            </h4>
            {/* <h5>$24.99</h5> */}
            <p className="card-text">{shorten(description, 100)}</p>
          </div>
          <div className="card-footer">
            {/* <small className="text-muted">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </small> */}
            <small className="text-muted">{rating}</small>
          </div>
        </div>
      </div>
    ))}
  </>
);

export { MovieList };

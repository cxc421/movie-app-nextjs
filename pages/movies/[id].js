import { getMovieById } from "../../actions";

const Movie = ({ movie }) => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
      <p className="desc-text">{movie.longDesc}</p>
      <style jsx>
        {`
          .desc-text {
            font-size: 21px;
          }
        `}
      </style>
    </div>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const movie = await getMovieById(id);
  return { props: { movie } };
}

export default Movie;

// Question: 該用 getServerSideProps 增強 SEO ?

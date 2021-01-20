import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../../actions";

const Movie = ({ movie }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <button className="btn btn-primary btn-lg mr-1" href="#" role="button">
          Learn more
        </button>
        <button
          onClick={() => handleDeleteMovie(id)}
          className="btn btn-danger btn-lg mr-1"
          href="#"
          role="button"
        >
          Delete
        </button>
        <button
          onClick={() => router.push(`/movies/${id}/edit`)}
          className="btn btn-warning btn-lg"
          href="#"
          role="button"
        >
          Edit
        </button>
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
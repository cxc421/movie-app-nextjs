import React from "react";
import { useRouter } from "next/router";
import { MovieCreateForm } from "../../../components/MovieCreateForm";
import { getMovieById, updateMovie } from "../../../actions";

const EditMovie = ({ movie }) => {
  const router = useRouter();

  const handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
      router.push(`/movies/${movie.id}`);
    });
  };

  return (
    <div className="container pb-3">
      <h1>Edit the Movie</h1>
      <MovieCreateForm
        submitButtonText="Update"
        initialData={movie}
        handleFormSubmit={handleUpdateMovie}
      />
    </div>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const movie = await getMovieById(id);
  return { props: { movie } };
}

export default EditMovie;

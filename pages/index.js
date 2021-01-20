import { useState, useMemo } from "react";
import { Carousel } from "../components/Carousel";
import { MovieList } from "../components/MovieList";
import { SideMenu } from "../components/SideMenu";
import { getMovies, getCategories } from "../actions";

export default function Home({ movies = [], images, categories }) {
  const [filter, setFilter] = useState("all");

  const filterMovies = useMemo(() => {
    if (filter === "all") {
      return movies;
    }
    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter);
    });
  }, [filter, movies]);

  const changeCategory = (category) => {
    setFilter(category);
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu
              appName="Movie DB"
              categories={categories}
              changeCategory={changeCategory}
              activeCategory={filter}
            />
          </div>

          <div className="col-lg-9">
            <Carousel images={images} />
            <h1 className="h3 pb-2">Displaying {filter} movies</h1>
            <div className="row">
              <MovieList movies={filterMovies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Question: 該用 getInitialProps 或是 getServerSideProps ?

// Home.getInitialProps = async () => {
//   const movies = await getMovies();
//   return { movies };
// };

// // This gets called on every request
export async function getServerSideProps() {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie) => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    name: movie.name,
  }));
  return { props: { movies, images, categories } };
}

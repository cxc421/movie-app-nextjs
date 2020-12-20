import { Carousel } from "../components/Carousel";
import { MovieList } from "../components/MovieList";
import { SideMenu } from "../components/SideMenu";
import { getMovies } from "../actions";

export default function Home({ movies }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu appName="Movie DB" />
          </div>

          <div className="col-lg-9">
            <Carousel />

            <div className="row">
              {/* {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )} */}
              <MovieList movies={movies} />
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
  return { props: { movies } };
}

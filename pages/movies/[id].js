import { useRouter } from "next/router";

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>The Movie ID is {id}</h1>;
};

export default Movie;

// Question: 該用 getServerSideProps 增強 SEO ?

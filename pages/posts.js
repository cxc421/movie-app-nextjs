import { getPosts } from "../actions";

const Posts = ({ posts }) => {
  return (
    <div className="container">
      <h1>I am posts page</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <span>{p.id}: </span> <span>{p.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await getPosts();
  return { props: { posts } };
}

export default Posts;

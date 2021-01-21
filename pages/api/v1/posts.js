import axios from "axios";

export default async (req, res) => {
  // POST
  if (req.method === "POST") {
    const postData = JSON.parse(req.body);
    console.log(postData);

    return res.json({
      status: "Saving Post to DB!",
      ...postData,
    });
  }

  // Others
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = data.slice(0, 20);
  res.send(posts);
};

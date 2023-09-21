const loadPosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostPage = async ({ params }) => {
  const post = await loadPosts(params.id);

  return (
    <div>
      <h3>Post Page {post.id}</h3>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;

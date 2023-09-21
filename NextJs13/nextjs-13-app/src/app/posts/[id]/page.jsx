import PostsPage from '../page';
import { Suspense } from 'react';

const loadPosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostPage = async ({ params }) => {
  const post = await loadPosts(params.id);

  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>

      <h3>Otras Publicaciones</h3>

      <Suspense fallback={<h4>Loading Posts...</h4>}>
        <PostsPage />
      </Suspense>
    </div>
  );
};

export default PostPage;

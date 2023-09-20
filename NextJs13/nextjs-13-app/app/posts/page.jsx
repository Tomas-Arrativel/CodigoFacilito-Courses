import PostCard from '../../components/PostCard';

const loadPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

//RSC
const PostsPage = async () => {
  const posts = await loadPosts();
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default PostsPage;

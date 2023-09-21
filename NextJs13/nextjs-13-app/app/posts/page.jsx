import PostCard from '@/components/PostCard';
import './PostsPage.css';

const loadPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 1500));
  return data;
};

//RSC
const PostsPage = async () => {
  const posts = await loadPosts();

  return (
    <div className='posts'>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default PostsPage;

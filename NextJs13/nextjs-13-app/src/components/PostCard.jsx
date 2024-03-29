'use client';
import Link from 'next/link';
import './PostCard.css';

//RCC
const PostCard = ({ post }) => {
  return (
    <div className='post__container' key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h3>
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => alert(`${post.id}. ${post.title}`)}>Click</button>
    </div>
  );
};

export default PostCard;

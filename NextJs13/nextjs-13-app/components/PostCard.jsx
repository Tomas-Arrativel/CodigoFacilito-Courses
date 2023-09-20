'use client';

//RCC
const PostCard = ({ post }) => {
  return (
    <div key={post.id}>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => alert(`${post.id}. ${post.title}`)}>Click</button>
    </div>
  );
};

export default PostCard;

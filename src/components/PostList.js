import Post from './Post';
import styles from './PostList.module.css';

function PostList() {
  // 여기에 코드를 작성하세요

  const posts = [];

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

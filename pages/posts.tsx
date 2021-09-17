import { client } from '../client'
import Post from "../components/post";

export default function PostsPage() {
  const {usePosts} = client
  const posts = usePosts()?.nodes

  return (
    <div>
      <h1>My posts</h1>
      {posts.map((post) => {
        let postID = post.id
      return (
          <Post key={postID} post={post} />
      )})}
    </div>
  );
}
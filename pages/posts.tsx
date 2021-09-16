import Post from '../components/post';

const posts = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    content:
      'quia et suscipit suscipit recusandae consequuntur expedita et reprehenderit',
  },
  {
    id: 2,
    title: 'qui est esse',
    content:
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae',
  },
];

export default function PostsPage() {
  return (
    <div>
      <h1>My posts</h1>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}
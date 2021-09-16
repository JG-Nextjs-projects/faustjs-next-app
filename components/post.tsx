export interface PostProps {
  title: string;
  content: string;
}

export default function Post(props: PostProps) {
  const { title, content } = props;

  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  );
}
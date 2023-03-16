import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Example: pegando nome das categorias
  // filters[categorie][name][$contains]=Desenvolvimento
  const urlQuery = `sort=id:desc&pagination[start]=0&pagination[limit]=20&filters[categorie][name][$eqi]=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);
  return {
    props: { posts },
  };
};

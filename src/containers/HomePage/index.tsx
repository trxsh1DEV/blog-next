import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import { PostData } from '@/domain/posts/post';
import { Container } from './styles';
import Head from 'next/head';
import { SITE_NAME } from '@/config/app-config';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name='description'
          content='Blog de tecnologia, falamos sobre desenvolvimento e tudo que está acontecendo no mundo tech #vemsertech'
        />
      </Head>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            // <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
            <PostCard
              cover={post.attributes.cover.data.attributes.formats.small.url}
              key={post.id}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}

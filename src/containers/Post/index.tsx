import { Comments } from '@/components/Comments';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { MainContainer } from '@/components/MainContainer';
import { PostContainer } from '@/components/PostContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { PostData } from '@/domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          alt={post.attributes.title}
          coverUrl={post.attributes.cover.data.attributes.formats.large.url}
        />
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.categorie.data.attributes.name}
          date={post.attributes.author.data.attributes.createdAt}
        />
        <PostContainer content={post.attributes.content} />
        <Comments title={post.attributes.title} slug={post.attributes.slug} />
      </MainContainer>
    </>
  );
};

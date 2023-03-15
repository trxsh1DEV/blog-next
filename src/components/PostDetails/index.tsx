import { Date } from '../Date';
import { Container } from './styled';

export type PostDetailsProps = {
  // children: React.ReactNode;
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} | &#34;{category}&#34;
    </Container>
  );
};

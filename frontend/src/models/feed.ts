import News from "./news";

interface Feed {
  title: string;
  items: News[];
  hasError: boolean;
}

export default Feed;
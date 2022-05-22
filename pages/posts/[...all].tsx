import { NextPage } from "next";
import { useRouter } from "next/router";

const PostsPage: NextPage = () => {
  const { query } = useRouter();
  console.log(query);
  return <div>sdf</div>;
};

export default PostsPage;

import { NextPage } from "next";
import { useRouter } from "next/router";

const AllPostsPage: NextPage = () => {
  const { locale, query } = useRouter();
  console.log(locale, query);
  return <div>sdf</div>;
};

export default AllPostsPage;

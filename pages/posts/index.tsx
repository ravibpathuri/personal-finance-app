import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router);
  return <div>Posts Page</div>;
};

export default Home;

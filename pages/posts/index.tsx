import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const PostsPage: NextPage = () => {
  const { locale, query } = useRouter();
  const { t } = useTranslation("common");
  console.log(locale, query);
  return (
    <div>
      <Head>
        <title>Posts - Predifast</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {t("Posts Page")}
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default PostsPage;

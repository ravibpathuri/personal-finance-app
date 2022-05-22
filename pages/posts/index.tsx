import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PostsPage: NextPage = () => {
  const { locale, query } = useRouter();
  const { t } = useTranslation("common");
  console.log(locale, query);
  return <div>{t("Posts Page")}</div>;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default PostsPage;

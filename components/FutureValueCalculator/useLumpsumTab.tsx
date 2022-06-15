export const useLumpsumTab = () => {
  const getSocialMediaTags = async () =>
    await (
      await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? "https:/personal-finance-app1.vercel.app"
            : "http://localhost:3000"
        }/api/smtag`
      )
    ).json();

  return { getSocialMediaTags };
};

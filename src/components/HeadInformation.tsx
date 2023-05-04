import Head from "next/head";

type HeadProps = {
  title: string;
};

const HeadInformation = ({ title }: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

HeadInformation.defaultProps = {
  title: "DishCovery : 공무원 맛집",
};

export default HeadInformation;

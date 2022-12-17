import Head from "next/head";

export default function NextHead({ title, description }) {
  return (
    <Head>
      <title>Reg. Klaim {title && `- ${title}`}</title>
      <meta
        name="description"
        content={description ? description : "Asuransi Nomor 1 di dunia"}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

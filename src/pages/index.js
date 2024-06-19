import Head from "next/head";
import HomePartOne from "@/components/main-page/HomePartOne";
import HomePartThree from "@/components/main-page/HomePartThree";
import HomePartTwo from "@/components/main-page/HomePartTwo";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>BestwBuy</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="e-commerce product you can find all you went in BestwBuy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/bootstrap-5.3.0-dist/css/bootstrap.min.css" />
      </Head>

      <main>
        <HomePartOne />
        <HomePartThree productsale={props.products} key={props.products.id} />
        <HomePartTwo />
      </main>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}

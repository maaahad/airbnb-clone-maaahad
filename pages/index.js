// react

// next
import Head from "next/head";

// react-jss

// components
import Hero from "../components/home/hero";

// css

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb - Clone - Muhammed Ahad</title>
        <meta
          name="description"
          content="This is a clone of Airbnb by Muhammed Ahad"
        />
      </Head>
      <Hero />
    </div>
  );
}

// getStaticProps to get the all featuredProjects, that will be passed to FeaturedProjects
export async function getStaticProps(context) {}

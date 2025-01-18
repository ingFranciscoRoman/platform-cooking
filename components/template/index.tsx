"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "@/components/template/app.module.scss";
import SectionRecipes from "@/components/organisms/SectionRecipes";
import Banner from "@/components/molecules/Banner";
import Footer from "@/components/organisms/Footer";

function App() {
  // const { status, data, error, isFetching } = useQuery({
  //   queryKey: ["/recipes/random?number=4"],
  // });

  // if (isFetching) {
  //   return <div>Loading...</div>;
  // }

  // console.log({ data });

  return (
    <div className={styles.hello}>
      <Banner />
      <SectionRecipes />
      <Footer />
    </div>
  );
}

export default App;

"use client";

// import { useQuery } from "@tanstack/react-query";
import styles from "./hello-world.module.scss";
import { SectionRecipes } from "../organisms/SectionRecipes";
import { Banner } from "../molecules/Banner/Banner";
import { Footer } from "../organisms/Footer";

export default function HelloWorld() {
  // const { status, data, error, isFetching } = useQuery({
  //   queryKey: ["/recipes/random"],
  // });

  // if (isFetching) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className={styles.hello}>
      <Banner />
      <SectionRecipes />
      <Footer />
    </div>
  );
}

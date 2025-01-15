"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "./hello-world.module.scss";
import { Banner } from "./banner/banner";

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
    </div>
  );
}

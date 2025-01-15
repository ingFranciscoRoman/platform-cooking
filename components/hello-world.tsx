"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "./hello-world.module.scss";

export default function HelloWorld() {
  const { status, data, error, isFetching } = useQuery({
    queryKey: ["/recipes/random"],
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.hello}>
      {JSON.stringify(data)}
      Hello World, I am being styled using SCSS Modules!
    </div>
  );
}

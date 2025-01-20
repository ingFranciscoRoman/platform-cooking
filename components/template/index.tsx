"use client";

import styles from "@/components/template/app.module.scss";
import SectionRecipes from "@/components/organisms/SectionRecipes";
import Banner from "@/components/molecules/Banner";
import Footer from "@/components/organisms/Footer";
import NavCardList from "@/components/molecules/NavCardList";
import { dataNavCardList } from "@/lib/data-nav";

function App() {
  return (
    <div className={styles.hello}>
      <Banner />
      <NavCardList dataNav={dataNavCardList} />
      <SectionRecipes />
      <Footer />
    </div>
  );
}

export default App;

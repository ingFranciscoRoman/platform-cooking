// import { monsterClubhouse, poppins } from "@/lib/fonts";
import { memo } from "react";
import style from "@/components/molecules/Banner/Banner.module.scss";

function Banner() {
  return (
    <section className={style.banner}>
      <div>
        <h2 className="primiari-p-title">Recetas</h2>
        <h3 className="secundari-m-title">para todos</h3>
      </div>
    </section>
  );
}

export default memo(Banner);

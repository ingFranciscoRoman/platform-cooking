import { monsterClubhouse, poppins } from "@/lib/fonts";
import style from "./Banner.module.scss";

export const Banner = () => {
  return (
    <section className={style.banner}>
      <div>
        <h2 className={`${poppins.className}`}>Recetas</h2>
        <span className={`${monsterClubhouse.className}`}>para todos</span>
      </div>
    </section>
  );
};

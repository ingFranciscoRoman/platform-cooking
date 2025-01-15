import style from "./banner.module.scss";

export const Banner = () => {
  return (
    <section className={style.banner}>
      <div>
        <h2>Recetas</h2>
        <span>para todos</span>
      </div>
    </section>
  );
};

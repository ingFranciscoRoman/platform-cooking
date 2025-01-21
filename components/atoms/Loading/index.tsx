import style from "@/components/atoms/Loading/Loading.module.scss";

function Loading() {
  return (
    <div className={style.loading}>
      <p className="secundari-m-title">Cargando recetas ...</p>
    </div>
  );
}

export default Loading;

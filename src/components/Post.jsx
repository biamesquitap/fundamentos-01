import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
          className={styles.avatar}
          src="https://github.com/biamesquitap.png"
          />
          <div>
            <strong className={styles.authorInfo}> Beatriz Mesquita </strong>
            <span> Web developer</span>
          </div>
        </div>

        <time title="12 de julho de 2022 as 11h52" dateTime="2022-07-12">Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> 👉 {'   '} <a href=""> jane.design/doctorcare </a> </p>
        <p>
          <a href=""> #novoprojeto </a> {' '}
          <a href=""> #nlw </a>  {' '}
          <a href=""> #rocketseat </a> </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario"/>
      </form>

      <footer>
        <button type="submit"> Publicar </button>
      </footer>
    </article>
  )
}
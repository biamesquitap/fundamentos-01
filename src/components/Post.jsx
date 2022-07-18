import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
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
       
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        placeholder="Deixe um comentario"
        />

      <footer>
        <button type="submit"> Publicar </button>
      </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}
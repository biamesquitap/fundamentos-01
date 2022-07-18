import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar 
        hasborder={false}
        src="https://github.com/bielpatricio.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Gabriel Patricio </strong>
              <time
                title="13 de Julho as 08:17"
                dateTime="2022-05-11 08:03:33"
              >
                Cerca de 26 min atras
              </time>
            </div>

            <button  title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>

          <p> Parabens pela evolucao </p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span> 75 </span>
          </button>
        </footer>
      </div>
    </div>
  )
}

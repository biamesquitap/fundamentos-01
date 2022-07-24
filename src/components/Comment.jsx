import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment ({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment () {
    onDeleteComment(content);
  }

  function handleLikeComment () {
    setLikeCount((state) => {
      return state +1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
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

            <button
            onClick={handleDeleteComment} title="Deletar Comentario"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content} </p>
        </div>
        
        <footer>
          <button 
            onClick = {(handleLikeComment)}
          >
             <ThumbsUp />
             Aplaudir <span> {likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  )
}
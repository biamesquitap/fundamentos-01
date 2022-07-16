import styles from "./Avatar.module.css"

export function Avatar () {
    return (
      <div className={styles.Avatar}>
      <img
        className={comment ? styles.avatar2comment : styles.avatar}
        src={src}
      />
    </div>
    )
}
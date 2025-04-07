import styles from "./ShareBox.module.css";

const ShareBox = () => {
  return (
    <div className={styles.shareBox}>
      <div className={styles.iconButtons}>
        <button>
          <img src="/img-icon.svg" alt="img" />
        </button>
        <button>
          <img src="/video-icon.svg" alt="video" />
        </button>
      </div>
      <input
        className={styles.input}
        placeholder="share your thoughts, achievements.."
      />
    </div>
  );
};

export default ShareBox;

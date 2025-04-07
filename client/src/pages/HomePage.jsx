import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.menuBox}>
          <div className={styles.menuItem}>🏠 Community</div>
          <div className={styles.menuItem}>❓ Doubts</div>
          <div className={styles.menuItem}>📅 Events</div>
          <div className={styles.menuItem}>📌 Project Hub</div>
          <div className={styles.menuItem}>🔥 Trending</div>
        </div>
        <div className={styles.mentorsBox}>
          <h4>Top Mentors</h4>
          <div className={styles.mentor}>
            Ali J<br />
            Product Manager @ Microsoft | Student @ comsats
          </div>
          <div className={styles.mentor}>
            Mariam K<br />
            Product Manager @ Microsoft | Student @ comsats
          </div>
        </div>
      </div>

      {/* Middle Content */}
      <div className={styles.middleContent}>
        {/* Share Box */}
        <div className={styles.shareBox}>
          <div className={styles.iconButtons}>
            <button>📷</button>
            <button>🎥</button>
          </div>
          <input
            type="text"
            placeholder="share your thoughts, achievements.."
            className={styles.input}
          />
        </div>

        {/* Post */}
        <div className={styles.post}>
          <div className={styles.header}>
            <img
              className={styles.avatar}
              src="https://i.pravatar.cc/150?img=3"
              alt="user"
            />
            <span>Umer Aziz</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam...
          </p>
        </div>
      </div>

      {/* Profile Card */}
      <div className={styles.profileCard}>
        <h2>Ashhar Zawar Syed</h2>
        <p>
          @ashharzawarsyed
          <br />
          Engineering & Artist | Java | Node.js | React.js | MySQL | JS | AI/VR
          | Freelancer
        </p>
        <p>Alumni Batches: 15</p>
        <p>Doubt Solved: 30</p>
        <p>
          Community Member: <strong>The Confident Students</strong>
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default HomePage;

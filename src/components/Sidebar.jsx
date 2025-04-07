import styles from "./Sidebar.module.css";
import {
  FaUsers,
  FaQuestionCircle,
  FaCalendarAlt,
  FaFire,
  FaProjectDiagram,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuBox}>
        <div className={styles.menuItem}>
          <FaUsers />
          <span>Community</span>
        </div>
        <div className={styles.menuItem}>
          <FaQuestionCircle />
          <span>Doubts</span>
        </div>
        <div className={styles.menuItem}>
          <FaCalendarAlt />
          <span>Events</span>
        </div>
        <div className={styles.menuItem}>
          <FaProjectDiagram />
          <span>Project Hub</span>
        </div>
        <div className={styles.menuItem}>
          <FaFire />
          <span>Trending</span>
        </div>
      </div>
      <div className={styles.mentorsBox}>
        <h3>Top Mentors</h3>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.mentor}>
            <div>Ali J</div>
            <div>Mentor {i}</div>
            <div>Product Manager @ Microsoft | Student @ COMSATS</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

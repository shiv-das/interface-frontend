import { bgcolor } from "@mui/system";
import styles from "../styles/Home.module.css";

export default function BranchChapter() {
  return (
    <div>
      <h4 className={styles.wordCarousel}>
        <div>
          <ul className={styles.flip3}>
            <li>COMPUTER ENGINEERING DEPARTMENT </li>
            <li className={styles.marginBC}>BRANCH CHAPTER</li>
            <li className={styles.marginInterface}>INTERFACE</li>
          </ul>
        </div>
      </h4>
    </div>
  );
}

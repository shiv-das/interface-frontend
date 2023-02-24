import styles from "../styles/Home.module.css";

export default function Hod() {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.hodPic}>
        <img src="/HODpic.png" height={200} width={200} />
      </div>
      <div className={styles.hodMessage}>
        <p>
          Welcome to Department of Computer Engineering. The Department seeks to
          combine excellence in education with service to the industry. Our
          vision is to be recognized as innovative and leading Department. Our
          goal is to provide students with a balance of intellectual and
          practical experiences that enable them to serve a variety of societal
          needs. Students are nurtured to become best software professionals or
          become Entrepreneurs in their own innovative way. I am sure in times
          to come many students from our department will make incredible mark
          nationally and internationally. The expertise of faculties is broad.
          We hold firm belief in our ability to succeed, practice human values,
          and show attitude of self-reliance, confidence and commitment. I am
          sure that the students of the department will show a high level of
          professional competence in their respective areas. I wish my students
          all the best for all their endeavors .
        </p>
      </div>
      <div className={styles.hodName}>Dr. Sarang Dhar Samantaray</div>
    </div>
  );
}

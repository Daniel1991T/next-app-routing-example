import Link from "next/link";
import styles from "./projects.module.css";
const ProjectList = () => {
  return (
    <main>
      <h1>Project List</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">JobIt</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">Hipnode</Link>
        </li>
      </ul>
    </main>
  );
};

export default ProjectList;

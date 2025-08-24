import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>Page Not Found</h2>
      <p className={styles.text}>
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" className={styles.button}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

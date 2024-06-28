import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
  <div className={styles.loadingSpinner}>
    <div className={styles.spinner}></div>
  </div>
);

export default LoadingSpinner;

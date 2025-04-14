import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a>GitHub</a>
        <a>LinkedIn</a>
        <a>Gmail</a>
    </div>
  )
}
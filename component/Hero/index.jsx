import styles from './style.module.scss';
import CustomMagnetic from "../NoMagnetic/index"

export default function Hero() {
    return (
        <CustomMagnetic strength={0.00}>
            <div className={styles.hero}>
                <h1>Hello World</h1>
                <p>I am <span>Shiwam Vishwakarma</span></p>
                <p>I'm a Frontend Developer who crafts clean, responsive, and interactive web experiences.
                    I specialize in React and love building seamless UIs that users enjoy.</p>
            </div>
        </CustomMagnetic>
    )
}
import styles from './style.module.scss';
import CustomMagnetic from "../NoMagnetic/index"
import {
    motion, 
    AnimatePresence, 
    useMotionTemplate,
    useMotionValue,
    animate,
} from 'framer-motion';
import { useState, useEffect } from 'react';


export default function Hero() {
    // Array of greetings in different languages
    const greetings = [
        "Hello", // English
        "नमस्ते", // Hindi
        "Hola", // Spanish
        "Bonjour", // French
        "Ciao", // Italian
    ];

    const COLORS_TOP = ["#976060", "#c27b7b", "#8a4545", "#d4a5a5"];

    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
    const [displayText, setDisplayText] = useState("Shiwam Vishwakarma");
    const [isAnimating, setIsAnimating] = useState(true);

    // For greeting rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGreetingIndex((prevIndex) =>
                prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
            );
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    // For name/title alternation
    useEffect(() => {
        const textInterval = setInterval(() => {
            setDisplayText(prev =>
                prev === "Shiwam Vishwakarma" ? "Frontend Developer" : "Shiwam Vishwakarma"
            );
            setIsAnimating(true);
        }, 5000);

        return () => clearInterval(textInterval);
    }, []);

    const summary = "I'm a Frontend Developer who crafts clean, responsive, and interactive web experiences. I specialize in React and love building seamless UIs that users enjoy."
    const words = summary.split(" ").map(word => word.trim());

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(155% 180% at 30% 0%, #020617 50%, ${color})`;

    return (
        <CustomMagnetic strength={0.00}>
            <motion.div className={styles.hero} style={{
                backgroundImage
            }}>
                <div className={styles.greetingContainer}>
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentGreetingIndex}
                            initial={{ filter: "blur(10px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(10px)", opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {greetings[currentGreetingIndex]}
                        </motion.h1>
                    </AnimatePresence>
                </div>
                <p>
                    {"I am".split('').map((letter, index) => (
                        <motion.span
                            key={`iam-${letter}-${index}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.3,
                                    delay: index * 0.05,
                                    ease: "easeOut"
                                }
                            }}
                            className={styles.animatedLetterWhite}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                    {" "}
                    <span className={styles.nameContainer}>
                        {displayText.split('').map((letter, index) => (
                            <motion.span
                                key={`${letter}-${index}-${displayText}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.3,
                                        delay: index * 0.05,
                                        ease: "easeOut"
                                    }
                                }}
                                onAnimationComplete={() => {
                                    if (index === displayText.length - 1) {
                                        setIsAnimating(false);
                                    }
                                }}
                                className={styles.animatedLetter}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <div className={styles.heroContainer}>
                    {words.map((word, index) => (
                        <motion.p
                            initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
                            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className={styles.heroText}
                        >
                            {word}{' '}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </CustomMagnetic>
    )
}
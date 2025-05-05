'use client'
import styles from './style.module.scss'
import { useEffect, useState, forwardRef } from 'react';
import Nav from './Nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';


import Magnetic from '../Magnetic/index'

const Header = forwardRef(function index(props, ref) {

    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <Magnetic>
                        <div className={styles.logo}>
                            <p className='text-white text-4xl font-semibold pl-6'>im<span className='text-[#ff7c7c]'>Blacksmith</span></p>
                        </div>
                    </Magnetic>

                    <Magnetic>
                        <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
                            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                                <div ref={ref} className={styles.bounds}></div>
                            </div>
                        </div>
                    </Magnetic>
                </div>

            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
})

export default Header;
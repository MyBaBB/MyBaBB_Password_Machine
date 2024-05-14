// eslint-disable-next-line no-unused-vars
import React from "react";
import { TfiNotepad } from "react-icons/tfi";
import styles from "../styles/brand.module.css";
import { PiRewindCircleFill } from "react-icons/pi";
 
export const Brand = () => {
    return (
        <header className={styles.header}>
            <a href="https://mybabb.github.io/MyBABB-Remember/">
            <div className={styles.iconContainer}>
            <TfiNotepad size={50} color="blue"/>
             <span className="absolute top-[3rem] text-green-600"><PiRewindCircleFill size={30}/></span>
            </div>
            \</a>
            <div className={styles.brandTitle}>
                <h1>
                   <span className="myName text-blue-900">Brett Baker</span>
                </h1>
                <small>Password Generator</small>
                 
            </div>
        </header>
    );
};

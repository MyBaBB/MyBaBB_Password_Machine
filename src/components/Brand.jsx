// eslint-disable-next-line no-unused-vars
import React from "react";
import { TfiNotepad } from "react-icons/tfi";
import styles from "../styles/brand.module.css";
import { PiRewindCircleFill } from "react-icons/pi";
import "./Brand.css" 
export const Brand = () => {
    return (
        <header className={styles.header}>
             <div className="relative flex">
            <a href="https://mybabb.github.io/MyBABB-Remember/">
            
            <div className={styles.iconContainer}>
            <TfiNotepad size={50} color="blue"/>
             <span className="absolute top-[1.5rem] text-green-600"><PiRewindCircleFill size={30}/></span>
            </div>
        
            </a>
            </div>           
            <div className={styles.brandTitle}>

                <h1 className="yourPersonal font-LibreBaskerville-Bold text-blue-950">
                    Your Personal 
                </h1>
                <small>Password Generator</small>
                </div>            
            
        </header>
    );
};

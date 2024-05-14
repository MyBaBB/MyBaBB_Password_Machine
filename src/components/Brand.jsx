// eslint-disable-next-line no-unused-vars
import React from "react";
import { KeyIcon } from "../icons/KeyIcon";
import styles from "../styles/brand.module.css";

export const Brand = () => {
    return (
        <header className={styles.header}>
            <div className={styles.iconContainer}>
                <KeyIcon />
            </div>
            <div className={styles.brandTitle}>
                <h1>
                   <span className="myName text-blue-900">Brett Baker</span>
                </h1>
                <small>Password Generator</small>
            </div>
        </header>
    );
};

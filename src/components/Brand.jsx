// eslint-disable-next-line no-unused-vars
import React from "react";
import { TfiNotepad } from "react-icons/tfi";
import styles from "../styles/brand.module.css";
import { PiRewindCircleFill } from "react-icons/pi";
import "./Brand.css";
export const Brand = () => {
  return (
    <header className={styles.header}>
      <div className="relative flex">
        <a href="https://mybabb.github.io/MyBABB-Remember/">
          <div className={styles.iconContainer}>
            <TfiNotepad size={80} color="navy" />
            <span className="absolute top-[1.5rem] text-green-600 ">
              <PiRewindCircleFill size={35} />
            </span>
          </div>
        </a>
      </div>
      <div className={styles.brandTitle}>
        <h1 className="yourPersonal font-LibreBaskerville-Bold text-blue-950">
          Your Private
        </h1>
        <bold>Password Generator</bold>
      </div>
    </header>
  );
};

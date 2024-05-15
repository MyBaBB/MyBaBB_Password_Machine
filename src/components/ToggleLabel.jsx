import styles from "../styles/toggleLabel.module.css";

export const ToggleLabel = ({ content, active }) => {
    return (
        <span className={`${styles.label} ${active && styles.active} font-ArchivoBlack-Regular`}>
            {content}
        </span>
    );
};

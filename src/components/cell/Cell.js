import React from 'react';
import styles from './cell.module.css'; // Correct file extension

function Cell({ i, onCick, array }) {
    if (array[i] == null) {
        return (
            <button className={styles.button} onClick={() => {
                onCick(i);
            }}></button>
        );
    }
    else {
        return (
            <button className={styles.button} disabled={true} onClick={() => {
                onCick(i);
            }}>{array[i]}</button>
        );
    }

}

export default Cell;
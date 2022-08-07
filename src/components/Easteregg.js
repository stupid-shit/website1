import React from 'react'
import styles from "../styles/easter.module.css"
import boba from "../assets/normal-boba.png"
import hackclub from "../assets/hackclub.svg"
import dino from "../assets/dino.png"

const Easteregg = () => {
  return (
    <div className={styles.container}>
        <div className={styles.eastercon}>
            <div className={styles.hackclub}>
            <img src={hackclub} alt="hackclub" />
            </div>
            <div className={styles.right}>
                <img src={boba} alt="boba" />
            </div>
        </div>
        <div className={styles.stupidcon}>
        <div className={styles.stupid}>
            This is stupid
        </div>
        <div className={styles.stuff}>
            stuff nobody needs
        </div>
        <div className={styles.you}>
            Like You
        </div>
        </div>
        <div className={styles.eastercon2}>
            <div className={styles.dino}>
            <img src={dino} alt="dino" />
            </div>
            <div className={styles.right2}>
                <img src={boba} alt="boba" />
            </div>
        </div>
    </div>
  )
}

export default Easteregg
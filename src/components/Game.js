import React from 'react'
import styles from "../styles/game.module.css"


const Game = () => {
    const [counter, setCounter] = React.useState(20);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    
  return (
    <div className={styles.container}>
        <div className={styles.timer}>
          {counter}s
        </div>
        <div className={styles.platform}>
        <div className={styles.character}>

        </div>
        </div>
    </div>
  )
}

export default Game
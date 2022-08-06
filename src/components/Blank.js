import React, { useState } from "react";
import styles from "../styles/blank.module.css"
import Jumpscare from "./Jumpscare";


const Blank = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
  <div  className={styles.blankcontainer}>
  <div onClick={() => setModalVisible(true)}>
  <div>
    This Website is Blank
  </div>
  <div className={styles.delay}>
    or is it??
  </div>
  </div>
  <div className={styles.overlay}>
  <Jumpscare 

      modalVisible={modalVisible}
    setModalVisible={setModalVisible}
/>
</div>
  </div>
  )
}

export default Blank 
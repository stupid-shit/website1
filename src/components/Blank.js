import React, { useState } from "react";
import styles from "../styles/blank.module.css"
import Jumpscare from "./Jumpscare";


const Blank = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
  <div  className={styles.blankcontainer}>
  <div onClick={() => setModalVisible(true)}>
    <a href="javascript:setTimeout(()=>{window. location = 'https://stupid-shit.github.io/' },5000);">
  <div>
    This Website is Blank
  </div>
  <div className={styles.delay}>
    or is it??
  </div>
  </a>
  </div>
  <div>
  <Jumpscare 

      modalVisible={modalVisible}
    setModalVisible={setModalVisible}
/>
</div>
  </div>
  )
}

export default Blank 
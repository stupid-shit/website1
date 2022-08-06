import React from "react";
import ResponsiveModal from "react-responsive-modal";
import jumpscare from "../assets/jumpscare.mp4"

const styles = {
  modal: {
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
    overflow: "none",
    width: "100%",
    padding: "0",
    margin: "0",
    height: "100%",
    minWidth: "100%",
    justifyContent: "center"
  },
  overlay: {
    backgroundColor: "#00000",
    padding: 0
  },
  closeIcon: {
    fill: "black"
  }
};

const Jumpscare = props => {
  const { setModalVisible, modalVisible } = props;
  return (
    <ResponsiveModal
      open={modalVisible}
      onClose={() => setModalVisible(false)}
      styles={styles}
      animationDuration={1000}
      focusTrapped={true}
      showCloseIcon={false}
    >
      <div style={{background: 'black', height: '100%', width: '100%'}}>
      <video  style={{width: '100%', height: '100%', position: 'relative', marginTop: '-65vh'}} autoPlay loop>
        <source src={jumpscare} type="video/mp4" />
      </video>
      </div>
    </ResponsiveModal>
  );
};

export default Jumpscare;

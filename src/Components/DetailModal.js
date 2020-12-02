import React from 'react';
import '../Styles.css'; 
import Modal from 'react-bootstrap/Modal'; 

const DetailModal = (props) => {

   return (
         <Modal
            open={props.handleOpen}
            onClose={props.handleClose}
            className={classes.Modal}
         >
            "Hello"
         </Modal>
   );
}

export default DetailModal; 
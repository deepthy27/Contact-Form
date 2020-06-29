import React, { useState,useEffect } from 'react';
import { Button, Modal,ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import {useSelector} from 'react-redux';
import dataModal from '../assets/dataModal.css'
import { ListGroup, ListGroupItem } from 'reactstrap';

const DataModal = (props) => {

  const formData = useSelector(state => state.formData)
  const [modal, setModal] = useState(true);
  const [modalData, setModalData] = useState([]);
  
  useEffect(() => {
    setModalData([...modalData,formData])

    
  },[]);
  const toggle = () => setModal(!modal);

  const submit = ()=> {
    props.history.push("/home");
  }

  return (
    <div>
      <Modal isOpen={modal} fade={false} toggle={toggle} >
      <ModalHeader toggle={toggle}>Form Data</ModalHeader>
          {
      modalData.map((data, i) => {
          return (
      <ModalBody key={i}>
        <ListGroup>
      <ListGroupItem><span className="labels">User Name:</span><span className="data">{data.userName}</span></ListGroupItem>
      <ListGroupItem><span className="labels">Email:</span><span className="data">{data.email}</span></ListGroupItem>
      <ListGroupItem><span className="labels">Phone:</span><span className="data">{data.phone}</span></ListGroupItem>
      <ListGroupItem><span className="labels">Address Lane:</span ><span className="data">{data.addressLane}</span></ListGroupItem>
      <ListGroupItem><span className="labels">City:</span><span className="data">{data.city}</span></ListGroupItem>
      <ListGroupItem><span className="labels">State:</span><span className="data">{data.stateName}</span></ListGroupItem>
      <ListGroupItem><span className="labels">Zip Code:</span><span className="data">{data.zipCode}</span></ListGroupItem>
    </ListGroup>
      </ModalBody>
      
  )
})
}
        <ModalFooter>
          <Button className="btn-lg btn-block" color="success" onClick={submit}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default withRouter(DataModal);


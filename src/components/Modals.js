import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleShow}>
        How to Order Food ? 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-blue-500 text-white">
          <Modal.Title>Order Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Connect your SuperHero Wallet Extension by clicking, Connect to wallet at bottom.
        </Modal.Body>
        <Modal.Footer className="bg-blue-500">
          <Button variant="secondary" onClick={handleClose} className="text-white">
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} className="text-white">
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;

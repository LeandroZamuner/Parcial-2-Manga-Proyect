import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoginModal = ({ onLogin, onClose }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (

    <Modal show={true} onHide={onClose} dialogClassName="modal-dark">

      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light">

        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="formUsername" className="mt-3">
            <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-4">
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="success" type="submit" className="mt-4 mb-3">
            Login
          </Button>

        </Form>

      </Modal.Body>

    </Modal>

  );

};

export default LoginModal;

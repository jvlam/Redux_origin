import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../action/actions";

function FormAddNew() {

  const dispatch = useDispatch();
  const isCreating = useSelector(state => state.user.isCreating)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  const handleCreateNewUser = () => {
    const data = {
      email,
      password,
      username
    }
    dispatch(createNewUser(data));
  }

  return (
    <>
      <Container>
        <Form className="mt-3">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter user Name" 
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Button 
            variant="primary" 
            onClick={() => handleCreateNewUser()}
            disabled={isCreating}
          >
            Submit
          </Button> 
        </Form>
      </Container>
    </>
  );
}

export default FormAddNew;

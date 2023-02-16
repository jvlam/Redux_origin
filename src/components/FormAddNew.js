import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function FormAddNew() {
  return (
    <>
      <Container>
        <Form className="mt-3">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="email" placeholder="Enter user Name" />
          </Form.Group>

          <Button variant="primary" >
            Submit
          </Button> 
        </Form>
      </Container>
    </>
  );
}

export default FormAddNew;

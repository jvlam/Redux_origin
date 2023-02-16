import FormAddNew from "./FormAddNew";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../action/actions";

function TableUser() {

//   const [listUsers, setListUsers] = useState([]);

  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.users);

  useEffect(() => {
    // fetchAllUsers();
    dispatch(fetchAllUsers())
  }, []);

//   const fetchAllUsers = async () => {
//     const res = await axios.get("http://localhost:8080/users/all");
//     const data = res && res.data ? res.data : [];
//     setListUsers(data);
//   };

  const handleDeleteUser = (user) => {
    console.log(user);
  }

  return (
    <>
      <Container>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                listUsers && listUsers.length > 0 &&
                listUsers.map((user, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteUser(user)}
                        >
                            Delete
                        </button>
                    </td>
                    </tr>
                ))
            }
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default TableUser;

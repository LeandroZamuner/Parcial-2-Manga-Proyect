import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserManagement = ({ users, onDeleteUser }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>
              <Button variant="danger" onClick={() => onDeleteUser(user.username)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserManagement;

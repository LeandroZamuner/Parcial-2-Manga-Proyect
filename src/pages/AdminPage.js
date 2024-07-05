import React from 'react';
import UserManagement from '../components/UserManagement';

const AdminPage = ({ users, onDeleteUser }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserManagement users={users} onDeleteUser={onDeleteUser} />
    </div>
  );
};

export default AdminPage;

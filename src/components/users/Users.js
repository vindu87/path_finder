import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const context = useContext(GithubContext);
  const { loading, users } = context;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      users && (
        <div style={userStyle}>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;

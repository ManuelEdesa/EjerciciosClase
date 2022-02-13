import React from 'react';

function Profile({ user }) {
  const { email, password, name } = user || {};
  return (
    <>
      <h1>Este es el perfil de  {email} </h1>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Password</dt>
      <dd>{password}</dd>
      <dt>Name</dt>
      <dd>Alumno</dd>
    </>
  );
}

export default Profile;
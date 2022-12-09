import React from 'react'

const Users = (props) => {
   const {data} = props;
  return (
    <div>
        <h3>Users</h3>
        <h4>{data.name}</h4>
    </div>
  )
}

export default Users

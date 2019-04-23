import React from 'react';

const UpdateUser = props => (
  <form>
    <label>Email</label>
    <input autoFocus className="form-control mb-3" type="email" placeholder="hello@example.com" />
    <label>First name</label>
    <input className="form-control mb-3" type="text" placeholder="John" />
    <label>Last name</label>
    <input className="form-control mb-3" type="text" placeholder="Doe" />
    <div className="mt-4">
      <button className="btn btn-primary" type="submit">
        Save
      </button>
    </div>
  </form>
);

export default UpdateUser;

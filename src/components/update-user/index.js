import React from 'react';

const UpdateUser = props => (
  <div className="row">
    <div className="col-md-4">
      <h4 className="mt-5 mb-3">Account settings</h4>
      <div className="card border-0 p-4 bg-light">
        <form>
          <label>Email</label>
          <input
            autoFocus
            className="form-control mb-3"
            type="email"
            placeholder="hello@example.com"
          />
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
      </div>
    </div>
  </div>
);

export default UpdateUser;

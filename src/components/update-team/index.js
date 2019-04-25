import React from 'react';

const UpdateTeam = props => (
  <form>
    <label>Name</label>
    <input className="form-control mb-3" type="text" placeholder="John" />
    <div className="mt-4">
      <button className="btn btn-primary" type="submit">
        Save
      </button>
    </div>
  </form>
);

export default UpdateTeam;

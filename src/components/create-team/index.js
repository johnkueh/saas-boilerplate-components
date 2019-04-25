import React from 'react';

const CreateTeam = props => (
  <form>
    <label>Name</label>
    <input autoFocus className="form-control mb-3" type="text" placeholder="John" />
    <div className="mt-4">
      <button className="btn btn-primary" type="submit">
        Create
      </button>
    </div>
  </form>
);

export default CreateTeam;

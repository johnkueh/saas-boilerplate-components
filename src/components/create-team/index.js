import React from 'react';

const CreateTeam = props => (
  <div className="row">
    <div className="col-md-4">
      <h4 className="mt-5 mb-3">Create a team</h4>
      <div className="card border-0 p-4 bg-light">
        <form>
          <label>Name</label>
          <input className="form-control mb-3" type="text" placeholder="John" />
          <div className="mt-4">
            <button className="btn btn-primary" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default CreateTeam;

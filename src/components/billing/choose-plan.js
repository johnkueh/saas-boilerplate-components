import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Formik, Field } from 'formik';
import Dinero from 'dinero.js';

const ChoosePlan = ({ plans, initialValue, onSubmit, onCancel }) => {
  return (
    <Formik initialValues={{ id: initialValue }} onSubmit={onSubmit}>
      {({ values, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            {plans.map(({ id, title, description, interval, amount, currency }) => (
              <div key={id} className="form-check mb-2">
                <div className="d-flex">
                  <div className="mr-2">
                    <Field
                      name="id"
                      type="radio"
                      id={id}
                      value={id}
                      checked={id === values.id}
                      className="form-check-input"
                    />
                  </div>
                  <div>
                    <label htmlFor={id}>
                      <div className="font-weight-bold">
                        {title} - {Dinero({ amount, currency }).toFormat('$0,0')}/{interval}
                      </div>
                      <div className="text-muted">{description}</div>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button className="pl-0 mr-2" variant="link" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Confirm</Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default withRouter(ChoosePlan);

ChoosePlan.propTypes = {
  plans: PropTypes.array.isRequired,
  initialValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

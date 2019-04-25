import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Formik, Field } from 'formik';

const ChoosePlan = ({ plans, initialValue, onSubmit, onCancel }) => {
  return (
    <Formik initialValues={{ id: initialValue }} onSubmit={onSubmit}>
      {({ values, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            {plans.map(plan => (
              <div key={plan.id} className="form-check mb-2">
                <div className="d-flex">
                  <div className="mr-2">
                    <Field
                      name="id"
                      type="radio"
                      id={plan.id}
                      value={plan.id}
                      checked={plan.id === values.id}
                      className="form-check-input"
                    />
                  </div>
                  <div>
                    <label htmlFor={plan.id}>
                      <div className="font-weight-bold">
                        {plan.title} - {plan.price}/month
                      </div>
                      <div className="text-muted">{plan.caption}</div>
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

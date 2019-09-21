import React, { Component } from 'react';

import Button, { LoadingButton } from '../UI/Button';

export default class CourseEditView extends Component {
  constructor(props) {
    super(props);
    this.state = { course: {}, isSaving: false };
  }

  render() {
    const { course, isSaving } = this.state;
    return (
      <form className="jr-form-edit">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Code</label>
              <input
                className="form-control"
                name="code"
                value={course.code || ''}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                name="name"
                value={course.name || ''}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Introduction</label>
              <textarea
                style={{ height: 100 }}
                className="form-control"
                name="description"
                value={course.description || ''}
              />
            </div>
          </div>
        </div>
        <LoadingButton type="submit" loading={isSaving}>
          <span style={{ paddingLeft: 3 }} />
          Save
        </LoadingButton>
        <Button> Cancel </Button>
      </form>
    );
  }
}

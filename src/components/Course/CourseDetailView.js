import React, { Component } from 'react';

import Button from '../UI/Button';

import CourseDetailDisplay from './CourseDetailDisplay';

class CourseDetailView extends Component {
  constructor(props) {
    super(props);
    // let { course } = props.location.state || {};
    this.state = {
      isLoading: false,
      isSaving: false,
      notFound: false,
      error: null,
      course: {},
    };
  }

  render() {
    return (
      <div>
        <CourseDetailDisplay course={this.state.course} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button primary className={'btn-group'}>
            Edit
          </Button>
          <Button danger className={'btn-group'}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default CourseDetailView;

// import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

// import Button, { LoadingButton } from '../UI/Button';
import CourseCard from './CourseCard';


export default class CoursesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      // courses: [],
      courses: [
        {
          _id: 1,
          name: 'React SPA Start',
          code: 'front101',
          cover: 'cloud.jpeg',
          intro: `In order for you to thrive in the digital environment,
          you need to understand the implications of the changing technology
          landscape on your organization.`,
        },
        {
          _id: 2,
          name: 'Rest API with .NET',
          code: 'cloud101',
          cover: 'all.png',
          intro: `RESTish ecosystem, which constitutes a major part of webservices.
          For more in-depth analysis of the original REST`,
        },
        {
          _id: 3,
          name: 'Cloud Computing',
          code: 'cloud101',
          cover: 'cloud.jpeg',
          intro: `Innovation is one of the driving forces in our world.
          The constant creation of new ideas and their transformation into
          technologies and products forms a powerful cornerstone for 21st century society.`,
        },
        {
          _id: 4,
          name: 'Full Stack',
          code: 'full101',
          cover: 'all.png',
          intro: `Becoming a fullstack web developer requires you to cover a lot of skills.
          For beginners it’s often not easy to find the right learning path and to gain quick result.`,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Link to="/courses/edit/NEW" className="btn btn-lg btn-primary ">
          Add new course
        </Link>

        <div className="row" style={{ marginTop: 15 }}>
          {this.state.courses.map((course, index) => <CourseCard course={course} key={course._id} />)}
        </div>
      </div>
    );
  }
}

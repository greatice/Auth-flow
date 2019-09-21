import React from 'react';
import { Link } from 'react-router-dom';

// import Button from '../UI/Button';
import FlexView from '../UI/FlexView';

const PUBLIC_URL = process.env.PUBLIC_URL;
const styles = {
  cover: {
    width: '100%',
    height: 175,
    objectFit: 'cover',
  },
  contentWrapper: {
    backgroundColor: 'white',
    height: 230,
    padding: '10px 15px',
  },
  meta: {
    color: '#9a9a9a',
    fontSize: 14,
  },
  separator: {
    margin: '3px 10px',
  },
};

function CoverPhoto({ img }) {
  return (
    <div>
      <img src={`${PUBLIC_URL}/${img}`} style={styles.cover} alt=""/>
    </div>
  );
}

function CourseMeta({ course }) {
  return (
    <FlexView row style={styles.meta}>
      <i className="fa fa-list-alt" style={{ paddingTop: 3 }} />
      <p style={{ flex: 1, paddingLeft: 3 }}>{course.code || '101'}</p>
      <i className="fa fa-calendar" style={{ paddingTop: 3 }} />{' '}
      <span style={{ paddingLeft: 3 }}>{'09/09'}</span>
    </FlexView>
  );
}

function Footer({ course }) {
  // <span style={{ flex: 1, textAlign: 'right', paddingRight: 5, color: '#9a9a9a' }}>
  //   100+ studied
  // </span>
  return (
    <FlexView row style={{ padding: 5, alignItems: 'center' }}>
      <Link
        className="btn-borderless"
        style={{ paddingLeft: 8 }}
        to={{
          pathname: `/courses/edit/${course._id}`,
          state: { course },
        }}>
        <i className="fa fa-pencil-square-o" style={{ fontSize: 15 }} /> EDIT
      </Link>
    </FlexView>
  );
}

export default function CourseCard({ course }) {
  return (
    <div
      className="col-sm-6 col-md-4"
      style={{
        marginBottom: 15,
      }}>
      <div className="jr-course-card">
        <Link
          to={{
            pathname: `/courses/${course._id}`,
            state: { course },
          }}>
          <CoverPhoto img={course.cover} />
        </Link>

        <div style={styles.contentWrapper}>
          <CourseMeta course={course} />
          <h4 className="text-center jr-course-card__name">{course.name}</h4>
          <p className="jr-course-card__introduction">{course.description}</p>
        </div>

        <hr style={styles.separator} />
        <Footer course={course} />
      </div>
    </div>
  );
}

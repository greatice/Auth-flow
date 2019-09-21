import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CoursesView from '../Course/CoursesView';
import CourseDetailView from '../Course/CourseDetailView';
import CourseEditView from '../Course/CourseEditView';

import SigninView from './SigninView';
import {isLogin} from '../../api/auth';

export default () => (
  <Switch>
    {/* <Route exact path="/" component={() => <h1>Course List</h1>} /> */}
    
    <ProtectedRoute exact path="/" component={CoursesView} />
    <Route exact path="/signin" component={SigninView} />
    <Route exact path="/courses" component={CoursesView} />
    <Route exact path="/courses/:id" component={CourseDetailView} />
    <Route exact path="/courses/edit/:id" component={CourseEditView} />

    <ProtectedRoute exact path="/students" component={() => <h1>Student List</h1>} />
    <Route exact path="/lecturers" component={() => <h1>lecturers List</h1>} />
    {/*<Route path="/students/:id" component={StudentDetailView} />
    <Route path="/students/edit/:id" component={StudentEditView} />

    <Route exact path="/lecturers" component={LecturersView} />
    <Route path="/signin" component={SigninView} /> */}
  </Switch>
);

const ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => {
  return <Route {...rest} render= {routeProps => isLogin() ? 
    <ProtectedComponent {...routeProps}/> : 
    <Redirect to={{
      pathname: '/signin', 
      state: {from: routeProps.location}
    }}/>} />
}

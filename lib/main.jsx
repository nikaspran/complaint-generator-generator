/** @jsx React.DOM */
import _ from 'lodash';
import React from 'react';
import ComplaintBody from './components/ComplaintBody.jsx!';

React.render(
  <div className="content">
    <h1>Complaint generator generator</h1>
    <ComplaintBody/>
  </div>, document.body
);
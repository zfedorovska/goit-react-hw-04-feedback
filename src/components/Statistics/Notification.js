import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Notification = ({ message }) => (
  <div className={s.notification}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

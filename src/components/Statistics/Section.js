import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Section = ({ title, children }) => (
  <div className={s.section}>
    <p className={s.title}>{title}</p>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

// import './PrimaryTitle.scss';
import React from 'react';

// styles
import { Header } from './PrimaryTitle.style';

type PrimaryTitleProps = {
  value: string;
};

const PrimaryTitle = ({ value }: PrimaryTitleProps) => <Header>{value}</Header>;

export default PrimaryTitle;

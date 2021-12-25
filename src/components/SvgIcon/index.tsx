import React from 'react';
import styles from './style.module.css';

interface IProps {
  symbol: any;
  size?: number;
}

const SvgIcon: React.FC<IProps> = ({ symbol, size = 24 }) => {
  return (
    <svg className={styles.svg} width={size} height={size}>
      <use xlinkHref={'#' + symbol.id} />
    </svg>
  );
};

export default SvgIcon;

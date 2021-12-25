import styles from './style.module.css';

import { Image } from 'antd-mobile';
import React from 'react';

interface IProps {
  name: string;
  imageUrl: string;
}

const NewSong: React.FC<IProps> = ({ name, imageUrl }) => {
  return (
    <>
      <div className={styles.song}>
        <Image
          src={imageUrl}
          width={50}
          height={50}
          style={{ borderRadius: 4, boxShadow: '0 0 2px 1px rgba(0, 0, 0, 0.1)' }}
          lazy></Image>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
        </div>
      </div>
    </>
  );
};

export default NewSong;

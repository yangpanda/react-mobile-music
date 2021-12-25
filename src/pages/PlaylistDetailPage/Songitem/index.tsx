import { IAlbum } from '@models/IAlbum';
import { IArtist } from '@models/IArtist';
import { MoreOutline } from 'antd-mobile-icons';
import React from 'react';
import styles from './style.module.css';

interface IProps {
  id: number;
  name: string;
  index: number;
  artists: IArtist[];
  album: IAlbum;
}

const SongItem: React.FC<IProps> = ({ id, name, index, artists, album }) => {
  return (
    <div className={styles.songitem}>
      <div className={styles.index}>{index}</div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div>
          <span>-{album.name}</span>
        </div>
      </div>
      <MoreOutline />
    </div>
  );
};

export default SongItem;

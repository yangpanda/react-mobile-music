import React from 'react';
import { Image } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.css';

interface IProps {
  picUrl: string;
  name: string;
  id: number;
}

const PlaylistItem: React.FC<IProps> = ({ picUrl, name, id }) => {
  const navigate = useNavigate();
  const toPlaylistDetail = (id: number) => {
    navigate(`/playlist-detail/${id}`);
  };

  return (
    <>
      <div className={styles.playlist} onClick={() => toPlaylistDetail(id)}>
        <Image
          src={picUrl}
          width={90}
          height={90}
          style={{ borderRadius: 8, boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.1)' }}></Image>
        <div className={styles.name}>{name}</div>
      </div>
    </>
  );
};

export default PlaylistItem;

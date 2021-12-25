import styles from './style.module.css';

import { Card } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { getRecommendPlaylists } from '../../../apis/playlist';
import { useEffect, useState } from 'react';
import { IPlaylist } from '@/models/IPlaylist';
import PlaylistItem from './PlaylistItem';

const Playlist = () => {
  const [playlists, setPlaylists] = useState<IPlaylist[]>([]);

  useEffect(() => {
    async function getRecommendPlaylistsFn() {
      const res = await getRecommendPlaylists();
      setPlaylists(res);
    }
    getRecommendPlaylistsFn();
  }, []);

  return (
    <>
      <Card title={<div style={{ fontWeight: 'normal' }}>推荐歌单</div>} extra={<RightOutline />}>
        <div className={styles.playlistContainer}>
          {playlists.map(({ id, name, picUrl }) => (
            <PlaylistItem picUrl={picUrl} name={name} id={id} key={id}></PlaylistItem>
          ))}
        </div>
      </Card>
    </>
  );
};

export default Playlist;

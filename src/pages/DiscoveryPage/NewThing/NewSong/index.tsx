import styles from './style.module.css';

import SongItem from './SongItem';
import { useEffect, useState } from 'react';
import { ISong } from '@/models/ISong';
import { getTopSong } from '@/apis/song';
import { SONG_TYPE } from '@/apis/song';

const NewSong = () => {
  const [songs, setSongs] = useState<ISong[]>([]);

  useEffect(() => {
    async function getTopSongFn(type?: SONG_TYPE) {
      const res = await getTopSong(type);
      setSongs(res.slice(0, 6));
    }

    getTopSongFn();
  }, []);

  return (
    <>
      <div className={styles.song}>
        {songs.map((item) => (
          <SongItem
            name={item.name}
            imageUrl={item.album ? item.album.picUrl : ''}
            key={item.name}></SongItem>
        ))}
      </div>
    </>
  );
};

export default NewSong;

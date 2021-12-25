import { NavBar, Space, List } from 'antd-mobile';
import { SearchOutline, MoreOutline } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';
import { getPlaylistSongs } from '@/apis/playlist';
import { useEffect, useState } from 'react';
import { ISong } from '@/models/ISong';
import { useParams } from 'react-router-dom';
import SongItem from './Songitem';
import React from 'react';

import { set } from '@/store/currentSongState';
import { usePlayerDispatch } from '@/store/index';

const PlaylistDetailPage: React.FC = () => {
  const { playlistId } = useParams();
  const dispatch = usePlayerDispatch();
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const right = (
    <div style={{ fontSize: 20 }}>
      <Space>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  );

  const [songs, setSongs] = useState<ISong[]>([]);

  useEffect(() => {
    async function getPlaylistSongsFn(id: number) {
      const res = await getPlaylistSongs(id);
      setSongs(res);
      console.log(res);
    }

    getPlaylistSongsFn(Number(playlistId));
  }, []);

  return (
    <>
      <div>
        <NavBar back="歌单" right={right} onBack={back}></NavBar>
        <List>
          {songs.map((item, index) => (
            <List.Item key={item.id} onClick={() => dispatch(set(item.id))}>
              <SongItem
                id={item.id}
                index={index}
                name={item.name}
                album={item.al}
                artists={item.artists}></SongItem>
            </List.Item>
          ))}
        </List>
      </div>
    </>
  );
};

export default PlaylistDetailPage;

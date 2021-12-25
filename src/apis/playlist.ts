import axios from '@/helpers/axios';
import { IPlaylist, IPlaylistDetail } from '@/models/IPlaylist';
import { ISong } from '@/models/ISong';

type GetRecommendPlaylistsFn = () => Promise<IPlaylist[]>;
type GetPlaylistDetailFn = (id: number) => Promise<IPlaylistDetail>;
type GetPlaylistSongsFn = (id: number) => Promise<ISong[]>;

export const getRecommendPlaylists: GetRecommendPlaylistsFn = async () => {
  const response = await axios({
    url: '/personalized',
    params: {
      limit: 10
    }
  });

  return response.result;
};

export const getPlaylistDetail: GetPlaylistDetailFn = async (id) => {
  const response = await axios({
    url: '/playlist/detail',
    params: {
      id: id
    }
  });

  return response.playlist;
};

export const getPlaylistSongs: GetPlaylistSongsFn = async (id) => {
  const response = await axios({
    url: '/playlist/track/all',
    params: {
      id: id
    }
  });

  return response.songs;
};

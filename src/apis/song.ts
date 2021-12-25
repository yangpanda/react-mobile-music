import axios from '@/helpers/axios';
import { ISong } from '@/models/ISong';

export enum SONG_TYPE {
  ALL = 0,
  CHINESE = 7,
  EU_USA = 96,
  JAPANESE = 8,
  KOREAN = 16
}

type GetTopSongFn = (type?: SONG_TYPE) => Promise<ISong[]>;

export const getTopSong: GetTopSongFn = async (type = SONG_TYPE.ALL) => {
  const response = await axios({
    url: '/top/song',
    params: {
      type
    }
  });

  return response.data;
};

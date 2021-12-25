export interface IPlaylist {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}

export interface IPlaylistDetail {
  id: number;
  name: string;
  coverImgUrl: string;
  userId: number;
  description: string;
}

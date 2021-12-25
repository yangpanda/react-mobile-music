import { IArtist } from '@/models/IArtist';

export interface IAlbum {
  artist?: IArtist;
  artists?: IArtist[];
  blurPicUrl?: string;
  copyrightId?: number;
  description?: string;
  id: number;
  mark?: number;
  name: string;
  picId?: number;
  picUrl: string;
  publishTime?: number;
  size?: number;
  status?: number;
  subType?: string;
  type?: string;
}

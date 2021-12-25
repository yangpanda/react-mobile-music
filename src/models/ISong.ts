import { IAlbum } from '@/models/IAlbum';
import { IArtist } from '@/models/IArtist';

export interface ISong {
  album?: IAlbum;
  al: IAlbum;
  alias?: string[];
  artists: IArtist[];
  copyrightId?: number;
  duration: number;
  fee?: number;
  ftype?: number;
  id: number;
  mark?: number;
  mvid?: number;
  name: string;
  status?: number;
  picUrl: string;
}

import axios from '@/helpers/axios';
import { IBanner } from '@/models/IBanner';
import getPlatform from '@/helpers/platform';

type GetBannerFn = () => Promise<IBanner[]>;

export const getBanner: GetBannerFn = async () => {
  const response = await axios({
    url: '/banner',
    params: {
      type: getPlatform()
    }
  });

  return response.banners;
};

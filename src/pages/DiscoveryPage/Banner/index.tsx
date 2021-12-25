import './style.scss';
import { getBanner } from '@/apis/banner';

import { Swiper, Image } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { IBanner } from '@/models/IBanner';

function Banner() {
  const [banners, setBanners] = useState<Array<IBanner>>([]);

  useEffect(() => {
    async function getBannerFn() {
      const res = await getBanner();
      setBanners(res);
    }
    getBannerFn();
  }, []);

  return (
    <>
      <div className="discovery-banner-container">
        <Swiper autoplay loop>
          {banners.map((item, index) => (
            <Swiper.Item key={index}>
              <Image src={item.imageUrl || item.pic} style={{ borderRadius: 8 }}></Image>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Banner;

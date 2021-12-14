import './style.scss';

import { Swiper, Image } from 'antd-mobile';
import { useEffect, useState } from 'react';

function Banner() {
  const [banners, setBanners] = useState<Array<any>>([]);

  useEffect(() => {
    async function getBanners() {
      const res = await fetch('http://localhost:3000/banner?type=2');
      if (res.ok) {
        const json = await res.json();
        if (json.code == 200) {
          setBanners(json.banners);
        }
      }
    }

    getBanners();
  }, []);

  return (
    <>
      <div className="discovery-banner-container">
        <Swiper autoplay loop>
          {banners.map((item, index) => (
            <Swiper.Item key={index}>
              <Image src={item.pic} lazy style={{ borderRadius: 8 }}></Image>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Banner;

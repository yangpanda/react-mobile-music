import { Card } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { useState } from 'react';
import NewSong from './NewSong';
import NewAlbum from './NewAlbum';

import styles from './style.module.css';

interface Tab {
  name: string;
  component: any;
}

const NewThing = () => {
  const [currentTab, setCurrentTab] = useState<Tab>({ name: '新歌', component: <NewSong></NewSong> });

  const tabs: Tab[] = [
    { name: '新歌', component: <NewSong></NewSong> },
    { name: '新碟', component: <NewAlbum></NewAlbum> }
  ];

  const tab = (
    <ul className={styles.nav}>
      {tabs.map((item, index) => {
        return (
          <li
            className={styles.navItem + ' ' + (currentTab.name == item.name ? styles.active : '')}
            onClick={() => setCurrentTab(item)}
            key={index}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <Card title={tab} extra={<RightOutline />}>
        {currentTab.component}
      </Card>
    </>
  );
};

export default NewThing;

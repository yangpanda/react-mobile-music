import styles from './style.module.css';

import Header from './Header';
import Banner from './Banner';
import Playlist from './Playlist';
import NewThing from './NewThing';

function Discovery() {
  return (
    <div className={styles.discoveryPage}>
      <Header></Header>
      <Banner></Banner>
      <Playlist></Playlist>
      <NewThing></NewThing>
    </div>
  );
}

export default Discovery;

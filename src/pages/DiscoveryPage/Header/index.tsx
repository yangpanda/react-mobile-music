import styles from './style.module.css';

import { SearchBar } from 'antd-mobile';
import logo from '@/assets/images/svg/logo.svg';
import github from '@/assets/images/svg/github.svg';
import SvgIcon from '@/components/SvgIcon';

function Header() {
  return (
    <>
      <div className={styles.header}>
        <SvgIcon symbol={logo} size={28}></SvgIcon>
        <div className={styles.searchbarWrap}>
          <SearchBar placeholder="请输入内容" />
        </div>
        <a href="https://github.com/yangpanda/react-mobile-music">
          <SvgIcon symbol={github} size={26}></SvgIcon>
        </a>
      </div>
    </>
  );
}

export default Header;

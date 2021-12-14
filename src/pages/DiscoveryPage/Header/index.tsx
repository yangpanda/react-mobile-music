import './style.scss';
import { SearchBar } from 'antd-mobile';

function Header() {

  return (
    <>
      <div className="discovery-page-header">
        <SearchBar placeholder='请输入内容' />
      </div>
    </>
  );
}

export default Header;
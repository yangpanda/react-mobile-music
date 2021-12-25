import { TabBar } from 'antd-mobile';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './style.module.css';

const Tabbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      key: '/',
      title: '发现'
    },
    {
      key: '/personal',
      title: '我的'
    }
  ];

  return (
    <div className={styles.tabbar}>
      <TabBar activeKey={location.pathname} onChange={(value) => navigate(`${value}`)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Tabbar;

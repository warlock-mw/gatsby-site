import React from 'react';
import { Link } from "gatsby";
import styles from '@/scss/global.module.scss';

const AppNav = () => {
  return (
    <div className={styles.AppNav}>
      <ul>
        <li><Link to="/">カウンター</Link></li>
        <li><Link to="/qiita">Qiita</Link></li>
        <li><Link to="/graph">グラフ</Link></li>
      </ul>
    </div>
  );
}

export default AppNav;
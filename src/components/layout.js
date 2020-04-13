import React from "react"

import AppNav from '@/components/app-nav';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import styles from '@/scss/global.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.App}>
      <AppNav />
      <hr />
      <AppHeader />
      
      <main>{children}</main>
      
      <AppFooter />
    </div>
  )
}

export default Layout;

import { Footer } from 'common/template/Footer';
import { sidebar as Sidebar } from 'common/template/sidebar';
import React from 'react';
import '../common/template/dependencies';
import Header from '../common/template/header';
import Routes from './Routes';

const App: React.FC = () => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
  </div>
);

export default App;

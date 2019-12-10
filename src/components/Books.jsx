import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import '../css/Books.css';

export const Books = () => {

  function renderContent() {
    return <div className='books'>Books section</div>
  }

  return <div>
    <Header title='Books' />
    <Content renderFn={renderContent} />
  </div>;
}
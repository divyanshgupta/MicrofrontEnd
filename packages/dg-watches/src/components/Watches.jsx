import React from 'react';
import { Header } from 'dg-common';
import { Content } from 'dg-common';
import '../css/Books.css';

export const Watches = () => {

  function renderContent() {
    return <div className='watches'>Watches section</div>
  }

  return <div>
    <Header title='Watches' />
    <Content renderFn={renderContent} />
  </div>;
}
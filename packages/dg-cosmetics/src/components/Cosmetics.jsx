import React from 'react';
import { Header } from 'dg-common';
import { Content } from 'dg-common';
import '../css/Cosmetics.css';

export const Cosmetics = () => {

  function renderContent() {
    return <div className='cosmetics'>Cosmetics section</div>
  }

  return <div>
    <Header title='Cosmetics' />
    <Content renderFn={renderContent} />
  </div>;
}

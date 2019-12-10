import React from 'react';
import { Header } from 'dg-common';
import { Content } from 'dg-common';
import '../css/Clothing.css';

export const Clothing = () => {

  function renderContent() {
    return <div className='clothing'>Clothing section</div>
  }

  return <div>
    <Header title='Clothing' />
    <Content renderFn={renderContent} />
  </div>;
}
import React from 'react';
import { Header } from 'dg-common';
import { Content } from 'dg-common';
import '../css/Electronics.css';

export const Electronics = () => {

  function renderContent() {
    return <div  className='electronics'>Electronics section</div>
  }

  return <div>
    <Header title='Electronics' />
    <Content renderFn={renderContent} />
  </div>;
}
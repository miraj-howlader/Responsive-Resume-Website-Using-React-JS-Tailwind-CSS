import React from 'react';

import { social } from '../data.jsx';
const Social = () => {
  return <div className=' flex justify-between max-w-[250px]
   gap-10 mb-[35px]'>
    {social.map((item,index)=>{
      return <a
      key={index}
      className=' text-3xl hover:text-accent duration-300
       transition-all'
       href={item.href}>{item.icon}</a>
    })}
  </div>;
};

export default Social;

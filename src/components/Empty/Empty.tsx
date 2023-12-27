import React from 'react'
import empty from '../../assets/empty.png';
import './Empty.less'

const Empty = () => {
  return (
    <div className='empty-wrap'>
      <img src={empty} width={114} height={114} />
      <div className='empty-describe'><span>暂无文件，请点击创建</span></div>
    </div>
  );
};

export default React.memo(Empty)

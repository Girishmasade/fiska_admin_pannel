import React from 'react';
import { Pagination } from 'antd';
const onChange = (pageNumber) => {
  console.log('Page: ', pageNumber);
};
const Page = () => (
  <div className='flex justify-end'>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
  </div>
);
export default Page;
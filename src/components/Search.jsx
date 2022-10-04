import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);


const Searchs = () => (
    <Space direction="vertical">
      <Search 
      placeholder="请输入想要的内容"
      style={{ width: 304 }}
      onSearch={onSearch} enterButton />
    </Space>
  );
  
  export default Searchs;
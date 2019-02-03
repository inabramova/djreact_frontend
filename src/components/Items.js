import React from 'react';
import { List } from 'antd';
import { Empty } from 'antd';
import ItemCard from './ItemCard';


const Items = (props) => {

  if (!props.data || props.data.length===0) return <Empty/>
  return (
      <List
      itemLayout="vertical"
      //grid={{gutter: 16, column: 2}}
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={props.data}
      loading={props.loading}
      renderItem={item => (
        <List.Item
          key={item.title}
        >
          <List.Item.Meta
            description={<ItemCard item={item}/>}
          />
        </List.Item>
          )}
          />
  )
}


export default Items;



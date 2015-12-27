import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import Item from './Item';

test('empty <List/>', (t)=> {
  t.plan(1);

  const emptyList = [];
  const wrapper = shallow(<List items={emptyList} />);

  t.equal(wrapper.find('span').text(), '0');
});

test('3 item <List/>', (t)=> {
  t.plan(1);

  const threeItemList = [{id:'one'}, {id:'two'}, {id:'three'}];
  const wrapper = shallow(<List items={threeItemList} />);

  t.equal(wrapper.find('Item').length, 3);
});

test('basic <Item/>', (t)=> {
  t.plan(1);

  const basicItem = {id: 'one'};
  const wrapper = shallow(<Item item={basicItem}/>);

  t.equal(wrapper.find('div').text(), 'one');
});

import React, { memo, useState, useEffect } from 'react';
import { FilterWrapper } from './style';
import filterData from "@/assets/data/filter_data.json";
import classNames from 'classnames';

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  const [isFixed, setIsFixed] = useState(false); // 新增状态来控制固定效果

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY; // 获取当前滚动位置
      setIsFixed(top > 80); // 当滚动超过80px时，设置为固定
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // 清理事件监听
    };
  }, []);

  function itemClickHandle(item) {
    const newItems = [...selectItems];
    if (newItems.includes(item)) { // 移除操作
      const itemIndex = newItems.findIndex(filterItem => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else { // 添加操作
      newItems.push(item);
    }
    setSelectItems(newItems);
  }

  return (
    <FilterWrapper className={isFixed ? 'fixed' : ''}>
      <div className="filter">
        {
          filterData.map((item) => {
            return (
              <div 
                className={classNames("item", { active: selectItems.includes(item) })} 
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;

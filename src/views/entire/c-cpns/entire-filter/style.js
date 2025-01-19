import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: relative; /* 默认位置 */
  z-index: 9;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  transition: all 0.3s ease; /* 添加过渡效果 */

  &.fixed {
    position: fixed; /* 当滚动到顶部时固定 */
    top: 0; /* 紧贴顶部 */
    left: 0;
    right: 0;
  }

  .filter {
    display: flex;

    .item {
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: #484848;
      cursor: pointer;

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
  }
`;

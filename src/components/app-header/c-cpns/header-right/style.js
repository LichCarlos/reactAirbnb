import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${props => props.theme.text.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    box-sizing: content-box;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow};

    .panel {
      position: absolute; /* 绝对定位 */
      top: 54px; /* 根据需要调整位置 */
      right: 0; /* 根据需要调整位置 */
      width: 240px; /* 面板宽度 */
      background-color: #fff; /* 背景颜色 */
      border-radius: 10px; /* 圆角 */
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2); /* 阴影效果 */
      color: #666;
      z-index: 100; /* 确保在最上层 */

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px; /* 每个项的高度 */
          line-height: 40px; /* 行高 */
          padding: 0 16px; /* 内边距 */

          &:hover {
            background-color: #f5f5f5; /* 悬停效果 */
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd; /* 顶部分隔线 */
      }
    }
  }
`;

import styled from 'styled-components';

const AppWrapper = styled.div`
  padding: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid navy;
  border-radius: 10px;
  width: 500px;
  margin: 0 auto;
  background-color: #efefef;
  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);

  .pageTitle {
    margin-bottom: 20px;
  }
  .contactsTitle {
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .myTitle-appear {
    opacity: 0;
    transform: translateX(-100%);
  }
  .myTitle-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms;
  }
  .myTitle-exit {
    opacity: 1;
  }
  .myTitle-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }

  .myFilter-enter {
    opacity: 0;
    transform: translateY(-50%);
  }
  .myFilter-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 250ms;
  }
  .myFilter-exit {
    opacity: 1;
  }
  .myFilter-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
`;

export default AppWrapper;

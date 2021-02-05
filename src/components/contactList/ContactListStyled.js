import styled from 'styled-components';

const ContactListWrapper = styled.div`
  padding: 10px 0;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
  .myListItem-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .myListItem-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms;
  }
  .myListItem-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .myListItem-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 250ms;
  }
`;
export default ContactListWrapper;

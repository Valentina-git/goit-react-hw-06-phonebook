import styled from 'styled-components';

const ContactFormWrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  background-color: #efefef;

  .formLabel {
    font-weight: 700;
    display: block;
    margin-bottom: 10px;
  }
  .formInput {
    display: block;
    width: 100%;
  }
  .formBtn {
    padding: 5px 15px;
    border: 1px solid navy;
    border-radius: 5px;
    background-color: lightblue;
    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  }
  .formBtn:hover,
  .formBtn:focus {
    background-color: yellow;
  }
`;

export default ContactFormWrapper;

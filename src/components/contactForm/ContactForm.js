import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import Alert from '../alert/Alert';
import { addNewContact } from '../../redux/actions/phonebookActions';
import ContactFormWrapper from './ContactFormStyled';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ addNewContact, contacts }) => {
  const [state, setState] = useState({ ...initialState });
  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandlSubmit = e => {
    e.preventDefault();
    const user = { id: uuidv4(), name: state.name, number: state.number };
    if (contacts.some(elem => elem.name === user.name)) {
      showAlertMsg(`${user.name} is already in contacts`);
      return;
    }
    if (!user.name.length) {
      showAlertMsg('Please enter a name');
      return;
    }
    if (!user.number.length) {
      showAlertMsg('Please enter a number');
      return;
    }
    addNewContact(user);
    setState({ ...initialState });
  };

  const showAlertMsg = message => {
    setAlertMsg(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setTimeout(() => {
      setAlertMsg('');
    }, 3250);
  };

  const { name, number } = state;

  return (
    <ContactFormWrapper>
      <CSSTransition
        in={showAlert}
        timeout={250}
        classNames="myAlert"
        unmountOnExit
      >
        <Alert message={alertMsg} />
      </CSSTransition>
      <form onSubmit={onHandlSubmit}>
        <label className="formLabel">
          Name
          <input
            className="formInput"
            type="text"
            name="name"
            value={name}
            onChange={onHandleChange}
          />
        </label>
        <label className="formLabel">
          Number
          <input
            className="formInput"
            type="text"
            name="number"
            value={number}
            onChange={onHandleChange}
          />
        </label>
        <button className="formBtn" type="submit">
          Add contact
        </button>
      </form>
    </ContactFormWrapper>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewContact: camp => {
      dispatch(addNewContact(camp));
    },
  };
};
ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

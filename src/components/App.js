import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import AppWrapper from './AppStyled';

import Filter from './filter/Filter';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

const App = ({ contacts }) => {
  return (
    <AppWrapper>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        className="myTitle"
        unmountOnExit
      >
        <h1 className="pageTitle">Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <h2 className="contactsTitle">Contacts</h2>

      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames="myFilter"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />
    </AppWrapper>
  );
};

const mapStateToProp = state => {
  return {
    contacts: state.phonebook.contacts,
  };
};

App.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default connect(mapStateToProp)(App);

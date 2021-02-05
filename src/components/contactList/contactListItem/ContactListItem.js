import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  deleteContact,
  setFilter,
} from '../../../redux/actions/phonebookActions';
import ContactLi from './ContactListItemStyled';

const ContactListItem = ({
  item,
  contacts,
  filter,
  deleteContact,
  setFilter,
}) => {
  const onHandleClick = e => {
    const id = e.target.dataset.id;
    deleteContact(id);

    if (
      contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      ).length < 2
    ) {
      setFilter('');
    }
  };

  return (
    <ContactLi className="contactListItem" key={item.id}>
      <span className="contactListName">{item.name}: </span>
      <span className="contactListNumber">{item.number}</span>
      <button
        className="contactListBtn"
        type="button"
        data-id={item.id}
        onClick={onHandleClick}
      >
        Delete contact
      </button>
    </ContactLi>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.phonebook.contacts.filter(item =>
      item.name.toLowerCase().includes(state.phonebook.filter.toLowerCase()),
    ),
    filter: state.phonebook.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => {
      dispatch(deleteContact(id));
    },
    setFilter: value => {
      dispatch(setFilter(value));
    },
  };
};

ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

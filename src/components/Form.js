import React from 'react';

import { connect } from 'react-redux';

import { setText, setPassword } from '../store/form/actions';

const Form = ({ setText, setPassword, text, password }) => {
  return (
    <div>
      <form>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </form>
    </div>
  );
};

const MSTP = (store) => ({
  text: store.text,
  password: store.password
});

const MDTP = {
  setText,
  setPassword
};

export default connect(MSTP, MDTP)(Form);
import React from 'react';
import { connect } from 'react-redux'; 
import { startLogin, startLoginFacebook } from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Ce-ai avut si ce-ai pierdut.</p>
            <button className="button" onClick={startLogin}>
                Login with Google
            </button>
            <button className="button" onClick={startLoginFacebook}>
                Login with Facebook
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
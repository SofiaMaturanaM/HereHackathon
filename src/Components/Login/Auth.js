import React from 'react';
import firebaseIntegration from '../../firebase';
import withFirebaseAuth from 'react-auth-firebase';


class Auth extends Component {
    render() {

        const {
            signInWithGoogle,
            signInWithFacebook,
            googleAccessToken,
            facebookAccessToken,
            signOut,
            user,
            error
        } = this.props;

        return (
            <div>
                <button onClick = { signInWithGoogle }> Signin with Google </button> 
            <button onClick = { signInWithFacebook } > Signin with Facebook </button>
            </div>

        )
    }

}

const authConfig = {
    google: {
        redirect: true,
        returnAccessToken: true,
        saveUserInDatabase: true
    },

    facebook: {
        redirect: true,
        returnAccessToken: true,
        saveUserInDatabase: true
    }
}


export default withFirebaseAuth(Auth, firebase, authConfig);

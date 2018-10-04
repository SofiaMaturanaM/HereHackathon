import React from 'react';
import './Login.css';
import Logo from './Logo';
import Auth from './Auth';
import Options from './Options';
import AuthButton from './AuthButton';

const Login = () => {
	return ( 
		<div className = "loginMainContainer" >	
			<Logo />
			<Options />
			{/* <Auth />	 */}
			<AuthButton />
		</div>
	);
};

export default Login;
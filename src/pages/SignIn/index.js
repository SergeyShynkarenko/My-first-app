import React from 'react'
import Banner from './components/Banner'
import SignInForm from './components/SignInForm'
import { SignInWrapper } from './styled'


const SignIn = () => {
	return (
		<SignInWrapper>
			<Banner />
			<SignInForm/>
		</SignInWrapper>
	)
}

export default SignIn
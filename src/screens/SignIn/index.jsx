import React, { useContext } from 'react';
import { Button } from 'react-native';
import Container from '../../components/Container';

import AuthContext from '../../hooks/useAuth';

export default function SignIn() {
  
    const { signIn } = useContext(AuthContext);

    return (
        <Container>
            <Button onPress={signIn} title='Sign in' />
        </Container>
    );
}
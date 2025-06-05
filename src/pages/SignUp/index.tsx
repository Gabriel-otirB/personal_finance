import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignUp() {
  return (
    <Background>
      <Container
        behavior={"padding"}
        enabled
      >

        <AreaInput>
          <Input
            placeholder="Nome"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>
    </Background>
  );
}



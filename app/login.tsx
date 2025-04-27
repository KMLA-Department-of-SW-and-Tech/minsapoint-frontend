import React from 'react';
import {
  Box,
  Input,
  InputField,
  Text,
  Button,
  Heading,
  Center,
} from '@gluestack-ui/themed';
// import { VStack } from '../components/vstack'; 

import { commonStyles } from '../constants/ThemeStyles';

import { useAuth } from "@/contexts/authContext";
import { signUserInWithGoogle } from "@/firebase/auth"

const LoginScreen = () => {

  const { currentUser, userLoggedIn, accessToken } = useAuth();
  console.log(currentUser, userLoggedIn, accessToken);

  const onLoginButtonPressed = async () => {
    await signUserInWithGoogle();
  };

  return (
    <Center style={commonStyles.container}>
      <Heading style={{ ...commonStyles.titleText, marginBottom: 4, marginTop: 140 }}>
        MinsaPoint
      </Heading>
      <Text style={{ ...commonStyles.subtitleText, marginBottom: 32 }}>
        LOGIN
      </Text>

      {/* <Box style={commonStyles.shadowBox}> */}
        {/* <VStack space="md"> */}
          {/* <Box>
            <Text style={[commonStyles.labelText, { marginBottom: 40 }]}>
              ID
            </Text>
            <Input style={commonStyles.input}>
              <InputField placeholder="Enter ID" />
            </Input>
          </Box>

          <Box>
            <Text style={[commonStyles.labelText, { marginBottom: 40 }]}>
              Password
            </Text>
            <Input style={commonStyles.input}>
              <InputField placeholder="Enter Password" secureTextEntry />
            </Input>
          </Box> */}

          <Button
            style={[commonStyles.button, { marginTop: 16 }]}
            onPress={onLoginButtonPressed}
          >
            <Text style={commonStyles.buttonText}>Sign In with Google</Text>
          </Button>
        {/* </VStack> */}
      {/* </Box> */}
    </Center>
  );
};

export default LoginScreen;

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
import { VStack } from '../components/vstack'; 
import { commonStyles } from '../constants/ThemeStyles';

const LoginScreen = () => {
  return (
    <Center style={commonStyles.container}>
      <Heading style={{ ...commonStyles.titleText, marginBottom: 4, marginTop: 140 }}>
        MinsaPoint
      </Heading>
      <Text style={{ ...commonStyles.subtitleText, marginBottom: 32 }}>
        LOGIN
      </Text>

      <Box style={commonStyles.shadowBox}>
        <VStack space="md">
          <Box>
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
          </Box>

          <Button
            style={[commonStyles.button, { marginTop: 16 }]}
            onPress={() => console.log('Sign In pressed')}
          >
            <Text style={commonStyles.buttonText}>Sign In</Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;

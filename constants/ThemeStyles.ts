
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';
import { ViewStyle, TextStyle } from 'react-native';

export const commonStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 24,
  } as ViewStyle,

  shadowBox: {
    backgroundColor: Colors.light.card,
    paddingVertical: 24,
    borderRadius: 12,
    alignItems: 'center' as const,
  } as ViewStyle,

  titleText: {
    ...Fonts.heading,
    color: Colors.light.text,
    fontSize: 50,
    textAlign: 'center' as const,
  } as TextStyle,
  

  subtitleText: {
    ...Fonts.bold,
    color: Colors.light.text,
    fontSize: 30,
    textAlign: 'center' as const,
  } as TextStyle,

  labelText: {
    ...Fonts.regular,
    color: Colors.light.text,
    alignItems: 'center' as const,
  } as TextStyle,

  input: {
    backgroundColor: Colors.light.inputBackground,
    color: Colors.light.inputText,
  } as ViewStyle,

  button: {
    backgroundColor: Colors.light.button,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center' as const,
  } as ViewStyle,


  buttonText: {
    ...Fonts.bold,
    color: Colors.light.buttonText,
  } as TextStyle,
} as const;

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../constants/ThemeStyles';


export default function Index() {
  const handlePress = (buttonName: string) => {
    console.log(`${buttonName} 버튼이 눌렸습니다.`);
  };

  return (
    <View style={commonStyles.container}>
      <TouchableOpacity style={commonStyles.button} onPress={() => handlePress('버튼 1')}>
        <Text style={commonStyles.buttonText}>법정 리스트 다운받기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyles.button} onPress={() => handlePress('버튼 2')}>
        <Text style={commonStyles.buttonText}>법정 리스트 업로드</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyles.button} onPress={() => handlePress('버튼 3')}>
        <Text style={commonStyles.buttonText}>누계 파일 다운받기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyles.button} onPress={() => handlePress('버튼 4')}>
        <Text style={commonStyles.buttonText}>누계 파일 업로드</Text>
      </TouchableOpacity>
    </View>
  );
}


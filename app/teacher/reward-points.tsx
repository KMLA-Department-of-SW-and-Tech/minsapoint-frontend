import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { commonStyles } from '../../constants/ThemeStyles';
import { useRouter } from 'expo-router';

export default function PenaltyScreen() {
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedPenalty, setSelectedPenalty] = React.useState('');
  const [selectedStudent, setSelectedStudent] = React.useState('');
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}> 

<TouchableOpacity 
  style={commonStyles.header}
   
>
  <View style={commonStyles.headerLeft}>
    <TouchableOpacity
    onPress={() => router.push('/teacher')}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity style={{ marginLeft: 12 }}onPress={() => router.push('/teacher')}>
      <Ionicons name="home" size={24} color="black" />
    </TouchableOpacity>
  </View>
</TouchableOpacity>


      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={commonStyles.formBox}>
          <Text style={commonStyles.label}>활동 내역</Text>
          <View style={commonStyles.inputWrapper}>
          </View>

          <Text style={commonStyles.label}>분류</Text>
          <View style={commonStyles.pickerWrapper}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            >
              <Picker.Item label="선택하기" value="" />
              <Picker.Item label="도움" value="help" />
            </Picker>
          </View>

          <Text style={commonStyles.label}>활동 장소 및 시간</Text>
          <View style={commonStyles.pickerWrapper}>
            <Picker
              selectedValue={selectedPenalty}
              onValueChange={(itemValue) => setSelectedPenalty(itemValue)}
            >
              <Picker.Item label="선택하기" value="" />
            </Picker>
          </View>

          <View style={commonStyles.pickerWrapper}>
            <Picker
              selectedValue={selectedStudent}
              onValueChange={(itemValue) => setSelectedStudent(itemValue)}
            >
              <Picker.Item label="선택하기" value="" />
            </Picker>
          </View>

          <Text style={commonStyles.label}>상점 추천 학생 목록</Text>
          <View style={commonStyles.pickerWrapper}>
            <Picker
              selectedValue={selectedStudent}
              onValueChange={(itemValue) => setSelectedStudent(itemValue)}
            >
              <Picker.Item label="선택하기" value="" />
            </Picker>
          </View>

          {/* 추가 버튼 */}
          <TouchableOpacity style={commonStyles.button}>
            <Ionicons name="person-add" size={24} color="black" />
          </TouchableOpacity>

          {/* 제출 버튼 */}
          <TouchableOpacity style={commonStyles.button}>
            <Text style={commonStyles.buttonText}>Submit</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

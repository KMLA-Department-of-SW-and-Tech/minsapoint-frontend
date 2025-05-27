import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Button, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { commonStyles } from '../../constants/ThemeStyles';
import { useRouter } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';

export default function PenaltyScreen() {
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedPenalty, setSelectedPenalty] = React.useState('');
  const [students, setStudents] = React.useState(['']); // 처음엔 한 명

  const router = useRouter();

  const handleAddStudent = () => {
    setStudents([...students, '']);
  };

  const handleStudentChange = (value: string, index: number) => {
  const newStudents = [...students];
  newStudents[index] = value;
  setStudents(newStudents);
};


  const handleUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.assets && result.assets.length > 0) {
      console.log('Uploaded:', result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Header */}
      <View style={commonStyles.header}>
        <View style={commonStyles.headerLeft}>
          <TouchableOpacity onPress={() => router.push('/teacher')}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 12 }} onPress={() => router.push('/teacher')}>
            <Ionicons name="home" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={commonStyles.headerRight}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={commonStyles.profileImage}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={commonStyles.profileName}>왕두균</Text>
          </View>
        </View>
      </View>

      {/* Title */}
      <Text style={commonStyles.titleText}>벌점</Text>

      {/* Form Box */}
      <View style={commonStyles.formBox}>
        {/* 기소 항목 */}
        <Text style={commonStyles.label}>기소 항목</Text>
        <View style={commonStyles.pickerWrapper}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label="선택하기" value="" />
            <Picker.Item label="아침운동 불참" value="morning" />
            <Picker.Item label="지각" value="late" />
          </Picker>
        </View>

        {/* 부과 벌점 선택 */}
        <Text style={commonStyles.label}>부과 벌점 선택</Text>
        <View style={commonStyles.pickerWrapper}>
          <Picker
            selectedValue={selectedPenalty}
            onValueChange={(itemValue) => setSelectedPenalty(itemValue)}
          >
            <Picker.Item label="선택하기" value="" />
            <Picker.Item label="경고" value="warning" />
            <Picker.Item label="주말 자율학습 금지" value="ban" />
          </Picker>
        </View>

        {/* 기소 학생 목록 - 여러 개 */}
        {students.map((student, index) => (
          <View key={index}>
            <Text style={commonStyles.label}>기소 학생 목록 {index + 1}</Text>
            <View style={commonStyles.pickerWrapper}>
              <Picker
                selectedValue={student}
                onValueChange={(itemValue) => handleStudentChange(itemValue, index)}
              >
                <Picker.Item label="선택하기" value="" />
                <Picker.Item label="홍길동" value="hong" />
                <Picker.Item label="김철수" value="kim" />
              </Picker>
            </View>
          </View>
        ))}

        {/* Add student & Upload file buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <TouchableOpacity style={[commonStyles.button, { flex: 1, marginRight: 5 }]} onPress={handleAddStudent}>
            <Ionicons name="person-add" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[commonStyles.button, { flex: 1, marginLeft: 5 }]} onPress={handleUpload}>
            <Ionicons name="document-attach" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Submit button */}
        <TouchableOpacity style={commonStyles.button}>
          <Text style={commonStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

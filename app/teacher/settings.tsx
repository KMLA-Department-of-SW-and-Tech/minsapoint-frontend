import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../constants/ThemeStyles';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const router = useRouter();
  const handleLogout = () => {
    console.log('로그아웃 버튼이 눌렸습니다.');
    // 여기서 실제 로그아웃 처리(ex: 토큰 삭제, 로그인 화면으로 이동 등)를 하면 돼
  };

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
              <View style={commonStyles.headerLeft}>
                <TouchableOpacity onPress={() => router.push('/teacher')}>
                  <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 12 }} onPress={() => router.push('/teacher')}>
                  <Ionicons name="home" size={24} color="black" />
                </TouchableOpacity>
              </View>
              </View>

      {/* 개인정보 표시 */}
      <View style={commonStyles.infoBox}>
        <Text style={commonStyles.infoTitle}>이름</Text>
        <Text style={commonStyles.infoText}>왕두균 선생님</Text>

        <Text style={commonStyles.infoTitle}>이메일</Text>
        <Text style={commonStyles.infoText}>wang@example.com</Text>

        <Text style={commonStyles.infoTitle}>전화번호</Text>
        <Text style={commonStyles.infoText}>010-1234-5678</Text>
      </View>

      {/* 로그아웃 버튼 */}
      <TouchableOpacity style={commonStyles.logoutButton} onPress={handleLogout}>
        <Text style={commonStyles.logoutButtonText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}
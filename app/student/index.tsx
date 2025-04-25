import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../constants/ThemeStyles';
import { Ionicons } from '@expo/vector-icons';

export default function CounterScreen() {
  return (
    <View style={commonStyles.container}>
      {/* 상단 바 */}
      <View style={commonStyles.topBar}>
        <Text style={commonStyles.appTitle}>Counter</Text>
        <View style={commonStyles.rightProfileSection}>
          <View style={commonStyles.profileRow}>
            <Image
              source={{ uri: 'https://your-image-url.com/profile.jpg' }}
              style={commonStyles.profileImage}
            />
            <View style={{ marginLeft: 8 }}>
              <Text style={commonStyles.profileName}>조유찬 선생님</Text>
              
            </View>
          </View>
          <TouchableOpacity style={commonStyles.settingsIcon}>
            <Ionicons name="settings-outline" size={20} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 알림 아이콘 */}
      <TouchableOpacity style={commonStyles.notification}>
        <Ionicons name="notifications-outline" size={28} color="black" />
        <View style={commonStyles.notificationBadge}>
          <Text style={commonStyles.notificationText}>3</Text>
        </View>
      </TouchableOpacity>

      {/* 중앙 점수 정보 */}
      <View style={commonStyles.scoreSection}>
        <Text style={commonStyles.grayLabel}>누계</Text>
        <Text style={commonStyles.bigScore}>13</Text>

        <View style={commonStyles.subScores}>
          <View style={commonStyles.scoreItem}>
            <Text style={commonStyles.label}>벌점</Text>
            <Text style={commonStyles.value}>25</Text>
          </View>
          <View style={commonStyles.scoreItem}>
            <Text style={commonStyles.label}>상점</Text>
            <Text style={commonStyles.value}>12</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

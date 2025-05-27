import React from 'react';
import { View, ViewStyle } from 'react-native';

type VStackProps = {
  children: React.ReactNode;
  space?: 'sm' | 'md' | 'lg' | number;
  reversed?: boolean;
  style?: ViewStyle;
};

const spacingMap = {
  sm: 8,
  md: 16,
  lg: 24,
};

export const VStack = ({ children, space = 0, reversed = false, style }: VStackProps) => {
  const childrenArray = React.Children.toArray(children);
  const spacingValue = typeof space === 'number' ? space : spacingMap[space] || 0;

  const arrangedChildren = reversed ? [...childrenArray].reverse() : childrenArray;

  return (
    <View style={style}>
      {arrangedChildren.map((child, index) => (
        <View key={index} style={{ marginBottom: index < childrenArray.length - 1 ? spacingValue : 0 }}>
          {child}
        </View>
      ))}
    </View>
  );
};

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TouchableOpacity as DefaultTouchableOpacity,
  TextInput,
} from 'react-native';

import Colors, { colors } from '../constants/Colors';
import React from 'react';

type ThemeProps = {
  lightColor?: string | boolean;
  darkColor?: string | boolean;
  bold?: boolean;
  regular?: boolean;
  light?: boolean;
  size?: number;
  color?: string | boolean;
  disableOpacity?: boolean;
  bgColor?: string | boolean;
  label?: string;
  textColor?: string | boolean;
  loading?: boolean;
};

export function useThemeColor(
  props: { light?: any; dark?: any },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TouchableProps = ThemeProps & DefaultTouchableOpacity['props'];
export type InputProps = ThemeProps & TextInput['props'];

export function Text(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    bold,
    regular,
    light,
    size,
    color,
    ...otherProps
  } = props;
  const colorTheme = useThemeColor(
    { light: lightColor, dark: darkColor },
    'text'
  );

  return (
    <DefaultText
      style={[
        {
          color: color || colorTheme,
          fontFamily: bold
            ? 'Montserrat-Bold'
            : regular
            ? 'Montserrat-Regular'
            : light
            ? 'Montserrat-Light'
            : 'Montserrat-Medium',
          fontSize: size || 16,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props: TouchableProps) {
  const {
    style,
    lightColor,
    darkColor,
    bgColor,
    disableOpacity,
    ...otherProps
  } = props;
  const backgroundColor = useThemeColor(
    { light: bgColor || lightColor, dark: bgColor || darkColor },
    'background'
  );

  return (
    <DefaultTouchableOpacity
      style={[{ backgroundColor }, style]}
      {...otherProps}
      activeOpacity={disableOpacity ? 1 : 0.3}
    />
  );
}

export function Input(props: InputProps) {
  const { style, lightColor, darkColor, label } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <>
      <Text style={{ marginBottom: 10 }} color={colors.solid} size={14}>
        {label}
      </Text>
      <TextInput style={[{ color }, style]} {...props} />
    </>
  );
}

export function Button(props: TouchableProps) {
  const { style, bgColor, textColor, loading, label, ...otherProps } = props;

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: !loading && !bgColor ? colors.primary : colors.grey,
          alignItems: 'center',
          borderRadius: 10,
          padding: 20,
          width: '100%',
        },
        style,
      ]}
      disabled={loading}
      {...otherProps}
    >
      <Text bold size={18} color={textColor || colors.white}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function Divider() {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        marginVertical: 20,
      }}
      darkColor={colors.dark}
      lightColor={colors.divider}
    />
  );
}

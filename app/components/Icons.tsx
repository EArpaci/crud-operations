import Svg, { Circle, ClipPath, Defs, G, Path } from 'react-native-svg';
import { useThemeColor } from './Themed';

function colorTheme() {
  return useThemeColor({}, 'text');
}

export function IconChevronRight(props: { color?: string }) {
  return (
    <Svg width="24" height="24">
      <Path
        fill="none"
        stroke={props.color || colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.43 5.93L20.5 12l-6.07 6.07"
      ></Path>
      <Path
        fill="none"
        stroke={props.color || colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.5 12h16.83"
      ></Path>
    </Svg>
  );
}

export function IconChevronLeft(props: { color?: string }) {
  return (
    <Svg width="24" height="24">
      <Path
        fill="none"
        stroke={props.color || colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.57 5.93L3.5 12l6.07 6.07"
      ></Path>
      <Path
        fill="none"
        stroke={props.color || colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.5 12H3.67"
      ></Path>
    </Svg>
  );
}

export function IconTabHome(props: { color?: string }) {
  return (
    <Svg width="24" height="24">
      <G>
        <Path
          fill={props.color || colorTheme()}
          d="M0 20h20V9.242a3.553 3.553 0 00-1.239-2.7L11.971.73a3.01 3.01 0 00-3.939 0l-6.79 5.812A3.553 3.553 0 000 9.242zM1.935 9.242A1.615 1.615 0 012.5 8.015l6.79-5.812a1.086 1.086 0 011.419 0l6.79 5.812a1.615 1.615 0 01.565 1.227v8.821H1.935z"
        ></Path>
      </G>
    </Svg>
  );
}

export function IconTabStudents(props: { color?: string }) {
  return (
    <Svg width="24" height="24">
      <G
        fill="none"
        stroke={props.color || colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="M14.4 8.708l3.1-3.1-3.1-3.1"></Path>
        <Path d="M2.5 5.608h15M5.6 11.291l-3.1 3.1 3.1 3.1M17.5 14.391h-15"></Path>
      </G>
    </Svg>
  );
}

export function IconTabMore(props: { color?: string }) {
  return (
    <Svg width="24" height="24">
      <G fill={props.color || colorTheme()}>
        <Path d="M16.452 0h-12.9A3.548 3.548 0 000 3.548v12.9A3.548 3.548 0 003.548 20h12.9A3.548 3.548 0 0020 16.452v-12.9A3.548 3.548 0 0016.452 0zm1.613 16.452a1.613 1.613 0 01-1.613 1.613h-12.9a1.613 1.613 0 01-1.613-1.613v-12.9a1.613 1.613 0 011.613-1.613h12.9a1.613 1.613 0 011.613 1.613z"></Path>
        <Path d="M4.194 4.516h11.613v1.935H4.194z"></Path>
        <Path d="M4.194 9.032h11.613v1.935H4.194z"></Path>
        <Path d="M4.194 13.548h11.613v1.935H4.194z"></Path>
      </G>
    </Svg>
  );
}

export function IconAdd() {
  return (
    <Svg
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <Path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 100-6 3 3 0 000 6"></Path>
      <Path
        fillRule="evenodd"
        d="M13.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V8h-1.5a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5"
      ></Path>
    </Svg>
  );
}

export function IconLanguage() {
  return (
    <Svg width="24" height="24">
      <G
        fill="none"
        stroke={colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"></Path>
        <Path d="M7 8.25a2.583 2.583 0 003.64 0M13.36 8.25a2.583 2.583 0 003.64 0M8.4 13h7.2a.9.9 0 01.9.9 4.5 4.5 0 01-9 0 .9.9 0 01.9-.9z"></Path>
      </G>
    </Svg>
  );
}

export function IconFaq() {
  return (
    <Svg width="24" height="24">
      <G
        fill="none"
        stroke={colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 7.89l-1.072 1.86c-.24.41-.04.75.43.75h1.27c.48 0 .67.34.43.75L12 13.11"></Path>
        <Path d="M8.3 18.04v-1.16a8.579 8.579 0 01-4.19-6.984A7.919 7.919 0 0113.8 2.19a7.784 7.784 0 015.27 4.07c2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1.006-.96-.42-.96-.95zM8.5 21.999a12.808 12.808 0 017 0"></Path>
      </G>
    </Svg>
  );
}

export function IconContactUs() {
  return (
    <Svg width="24" height="24">
      <G
        fill="none"
        stroke={colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"></Path>
        <Path d="M17 9l-3.13 2.5a3.166 3.166 0 01-3.75 0L7 9"></Path>
      </G>
    </Svg>
  );
}

export function IconRadioCircle() {
  return (
    <Svg width="34" height="34">
      <G transform="translate(-301 -490)">
        <G
          transform="translate(301 490)"
          fill="none"
          stroke={colorTheme()}
          strokeWidth="2px"
        >
          <Circle cx="17" cy="17" r="17" stroke="none" />
          <Circle cx="17" cy="17" r="16" fill="none" />
        </G>
      </G>
    </Svg>
  );
}

export function IconRadioCircleActive() {
  return (
    <Svg width="34" height="34">
      <G transform="translate(-301 -490)">
        <G
          transform="translate(301 490)"
          fill="none"
          stroke={colorTheme()}
          strokeWidth="2px"
        >
          <Circle cx="17" cy="17" r="17" stroke="none" />
          <Circle cx="17" cy="17" r="16" fill="none" />
        </G>
        <Circle
          cx="12"
          cy="12"
          r="12"
          transform="translate(306 495)"
          fill={colorTheme()}
        />
      </G>
    </Svg>
  );
}

export function IconLogout() {
  return (
    <Svg width="24" height="24">
      <G
        fill="none"
        stroke={colorTheme()}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99"></Path>
        <Path d="M15 12H3.62M5.85 8.65L2.5 12l3.35 3.35"></Path>
      </G>
    </Svg>
  );
}

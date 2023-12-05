import React from 'react';
import {
  View,
  Text,
  Divider,
  TouchableOpacity,
  Button,
} from '../../components/Themed';
import { SafeAreaView, StyleSheet } from 'react-native';
import { IconRadioCircle, IconRadioCircleActive } from '../../components/Icons';
import { colors } from '../../constants/Colors';
import { useLocale } from '../../context/locale';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Locale, RootParamsList } from '../../constants/Types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function Language() {
  const { locale, locales, changeLocale } = useLocale();
  const [selectedLocale, setSelectedLocale] = React.useState<Locale>(locale);
  const [loading, setLoading] = React.useState(false);
  const { reset } = useNavigation<StackNavigationProp<RootParamsList>>();

  React.useEffect(() => {
    (async () => {
      setSelectedLocale(
        (await AsyncStorage.getItem('selectedLocale')) as Locale
      );
    })();
  }, []);

  const confirmLanguage = async () => {
    setLoading(true);
    changeLocale(selectedLocale);

    setTimeout(() => {
      setLoading(false);

      reset({
        index: 0,
        routes: [{ name: 'HomeTab' }],
      });
    }, 750);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}>
          <Text regular size={18}>
            In which language do you want to use the application?
          </Text>
        </View>
        <Divider />
        {locales.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => setSelectedLocale(item.value)}
            >
              {selectedLocale === item.value ? (
                <IconRadioCircleActive />
              ) : (
                <IconRadioCircle />
              )}
              <Text
                style={{ marginLeft: 10 }}
                bold
                color={selectedLocale !== item.value && colors.solid}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
            <Divider />
          </View>
        ))}
        <Button
          onPress={confirmLanguage}
          style={styles.button}
          loading={loading}
          label="Change"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  button: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

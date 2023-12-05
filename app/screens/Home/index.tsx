import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from '../../components/Themed';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { IconChevronRight } from '../../components/Icons';
import Students from '../Students';
import { studentsList } from '../../api/useApi';
import { TypeStudents } from '../../constants/Types';
import { colors } from '../../constants/Colors';

export default function Home() {
  const [students, setStudents] = React.useState<TypeStudents[]>([]);

  useEffect(() => {
    (async () => {
      const data = await studentsList();
      setStudents(data);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wrapper}>
          <Text size={20} bold style={{ marginTop: 5 }} color={colors.solid}>
            CRUD OPERATIONS
          </Text>
          <HeaderProfile />
        </View>
        <Students page="home" />
      </ScrollView>
    </SafeAreaView>
  );

  function HeaderProfile() {
    return (
      <>
        <TouchableOpacity style={styles.profileContainer}>
          <Text bold size={24}>
            Ali Veli
          </Text>
          <IconChevronRight />
        </TouchableOpacity>

        <View style={styles.locationContainer}>
          <Text>Administrator</Text>
        </View>

        <View style={styles.mt30}>
          <Text>Total Students</Text>
          <Text bold size={32} style={{ marginTop: 5 }}>
            {students && students.length}
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 25,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  mt30: {
    marginTop: 30,
  },
  profileContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    marginBottom: -50,
  },
});

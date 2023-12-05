import React, { useEffect } from 'react';
import { View, Text, Divider, TouchableOpacity } from '../../components/Themed';
import { Alert, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../../constants/Colors';
import { IconChevronRight, IconAdd } from '../../components/Icons';
import { useNavigation } from '@react-navigation/native';
import { deleteStudent, studentsList } from '../../api/useApi';
import { RootParamsList, TypeStudents } from '../../constants/Types';
import { StackNavigationProp } from '@react-navigation/stack';

export default function Students(props: { page?: string }) {
  const [students, setStudents] = React.useState<TypeStudents[]>([]);
  const { navigate } = useNavigation<StackNavigationProp<RootParamsList>>();
  const { page } = props;
  const { reset } = useNavigation<StackNavigationProp<RootParamsList>>();

  useEffect(() => {
    (async () => {
      const data = await studentsList();
      setStudents(data);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator>
        <StudentsList />
      </ScrollView>
    </SafeAreaView>
  );

  function StudentsList() {
    return (
      <View>
        <View style={styles.title}>
          <Text bold size={20}>
            {page !== 'home' ? 'Students' : 'Recent Students'}
          </Text>

          {page !== 'home' ? (
            <View style={styles.addStudentIcon}>
              <TouchableOpacity onPress={() => navigate('AddOrUpdateStudent')}>
                <IconAdd />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => navigate('StudentsTab')}>
              <IconChevronRight />
            </TouchableOpacity>
          )}
        </View>
        <Divider />

        {students.map((item: any, index: number) => (
          <View key={index}>
            <>
              <View style={[styles.studentContainer]}>
                <Text bold size={22}>
                  {item.name}
                </Text>
              </View>

              <View style={[styles.studentContainer, styles.mt15]}>
                <Text regular>Age</Text>
                <Text regular>Hometown</Text>
              </View>
              <View style={[styles.studentContainer, styles.mt5]}>
                <Text bold>{item.age}</Text>
                <Text bold>{item.hometown}</Text>
              </View>

              {page !== 'home' ? (
                <View style={[styles.studentContainer, styles.mt15]}>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('AddOrUpdateStudent', { itemStudentProps: item })
                    }
                  >
                    <Text bold size={18} color={colors.green}>
                      Güncelle
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        'Delete',
                        'You are about to delete this student. Are you sure you want to proceed?',
                        [
                          {
                            text: 'Yes',
                            onPress: async () => {
                              await deleteStudent(item.key);
                              reset({
                                index: 0,
                                routes: [{ name: 'StudentsTab' }],
                              });
                            },
                          },
                          {
                            text: 'No',
                          },
                        ],
                        { cancelable: false }
                      );
                    }}
                  >
                    <Text bold size={18} color={colors.red}>
                      Sil
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </>
            <Divider />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 25,
  },
  mt5: {
    marginTop: 5,
  },
  title: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addStudentIcon: {
    borderWidth: 1,
    borderColor: colors.solid,
    borderRadius: 10,
    padding: 10,
  },
  studentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mt15: {
    marginTop: 15,
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
});

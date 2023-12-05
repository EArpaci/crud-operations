import React, { useEffect } from 'react';
import { View, Text, Divider, Button, Input } from '../../components/Themed';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RootParamsList } from '../../constants/Types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { addStudent, studentsList, updateStudent } from '../../api/useApi';

export default function AddOrUpdateStudent({ route }) {
  const [loading, setLoading] = React.useState(false);
  const [studentName, setStudentName] = React.useState('');
  const [studentAge, setStudentAge] = React.useState('');
  const [studentHomeTown, setStudentHomeTown] = React.useState('');
  const { reset } = useNavigation<StackNavigationProp<RootParamsList>>();

  useEffect(() => {
    (async () => {
      if (route.params?.itemStudentProps) {
        const item = route.params.itemStudentProps;
        setStudentName(item.name);
        setStudentAge(item.age.toString());
        setStudentHomeTown(item.hometown);
      }
    })();
  }, []);

  const confirmStudent = async () => {
    setLoading(true);
    if (studentName === '' || studentAge === '' || studentHomeTown === '') {
      alert('All fields are required.');
      setLoading(false);
      return;
    }
    if (route.params?.itemStudentProps) {
      await updateStudent(
        route.params.itemStudentProps.key,
        studentName,
        studentAge,
        studentHomeTown
      );
    } else {
      await addStudent(studentName, studentAge, studentHomeTown);
    }

    setTimeout(() => {
      setLoading(false);

      reset({
        index: 0,
        routes: [{ name: 'StudentsTab' }],
      });
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ flex: 1 }}>
          <Text regular size={18}>
            Please fill in all fields below.
          </Text>
          <View style={{ marginTop: 30 }}>
            <Input
              placeholder="Name"
              style={styles.input}
              onChangeText={(text) => setStudentName(text)}
              value={studentName}
            />
            <Input
              placeholder="Age"
              style={styles.input}
              onChangeText={(text) => setStudentAge(text)}
              value={studentAge}
              keyboardType={'number-pad'}
            />
            <Input
              placeholder="Hometown"
              style={styles.input}
              onChangeText={(text) => setStudentHomeTown(text)}
              value={studentHomeTown}
            />
          </View>
        </View>
        <Divider />
        <Button
          onPress={confirmStudent}
          style={styles.button}
          loading={loading}
          label={
            route.params?.itemStudentProps ? 'Update Student' : 'Add Student'
          }
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
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderWidth: 0.3,
    borderRadius: 8,
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

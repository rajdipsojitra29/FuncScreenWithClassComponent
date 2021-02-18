// import * as React from 'react';
import React from 'react';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { ClassComponentSecond } from './ClassComponentSecond'


export function FuncScreenWithClassComponent({ navigation, route }) {

  function onPressGoBack() {
    navigation.goBack()
  }


  return (
    <ScrollView>
      <View style={Styles.viewMain}>
      <Text>FuncScreen With ClassComponent</Text>
        <Text>{route.params.dataNames[0]}</Text>
        <Text>{route.params.dataNames[1]}</Text>
        
        <Button 
        title="Go back" 
          // onPress={() => 
          // navigation.goBack()
          // } 
          onPress={onPressGoBack}
        />

        <ClassComponentSecond dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Hari', '2/05/2020', '10:10 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Shreeji', '17/02/2000', '7:30 AM']}></ClassComponentSecond>
        <ClassComponentSecond dataObj={['Sahajand', '7/10/1870', '5:00 PM']}></ClassComponentSecond>
        
      </View>
    </ScrollView>
  );
}










const Styles = StyleSheet.create({
  viewMain: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
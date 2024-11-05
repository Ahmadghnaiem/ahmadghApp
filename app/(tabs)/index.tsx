import { LogBox, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.AG}>
      <Text style={styles.txt} >index</Text>
      <View style={styles.box}>
        <View style={styles.top} >
          <View style={styles.red} />
          
          <View style={styles.red2}>
            <Text style={styles.name}>ahmad gh</Text> 
            <Text style={styles.BD}>B.D-17.9.1987</Text>
          </View>
           

        </View>
        <Text style={styles.my}>my first ui</Text> 

      </View>
      {/* <View style={styles.box}></View> */}
    </View>

  )
}

export default index

const styles = StyleSheet.create({
  AG: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingTop: 45
  },
  txt: {
    fontSize: 35,
    fontWeight: '300',

  },
  box: {
    height: 300,
    width: 300,
    borderWidth: 2,
    borderwidth: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: 'blue',
    marginLeft: 50,



  },
  red: {
    height: 100,
    backgroundColor: 'red',
    width: 100,
    marginLeft: 10,

  },
  top: {
    flexDirection: 'row',
    borderWidth: 1

  },
  name: {
    fontSize: 15,



  },
  red2: {
    height: 100,
    marginLeft: 10,
   borderWidth:1,
    flex:1

  },
  BD: {
    fontSize: 15,
    borderWidth:1,

  },
  my:{
    marginLeft:65,
    marginTop:60,
    fontSize: 40,
    color:'green'
    
  }

})
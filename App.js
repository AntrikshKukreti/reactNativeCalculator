// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [number, setNumber] = useState("");
  const [ans, setAns] = useState("");
  const topLayer = [7, 8, 9];
  const midLayer = [4, 5, 6];
  const bottomLayer = [1, 2, 3];
  const sign =['+','-','*','/','%','.']

  useEffect(() => {
     setValue(number);
     setTemp(number);
  },[number])

  const valueCalc = (inputValues) => {
    if(typeof inputValues === "string"){
      console.log( sign.includes(number[number.length-1]))
      sign.includes(number[number.length-1])?
      setNumber(`${temp}${''}`):
      number.includes('.') && inputValues == '.'? 
      setNumber(`${temp}${''}`):
      setNumber(`${temp}${inputValues}`)
    }else{
      setNumber(`${temp}${inputValues}`)
    }
  };
  
  const solve=()=>{
    sign.includes(value[value.length-1])?
    setAns('undefined'):
    setAns(eval(value))
  };

  const back=()=>{
    setNumber(number.substring(0,number.length-1))
  };

  return (
    <View style={styles.container}>
      <View style={styles.output}>
        <Text style={styles.outputText}>{value||0}</Text>
        <Text style={styles.outputText}>{ans}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => {
              setValue("")
              setTemp("")
              setNumber("")
              setAns("")
            }}
          >
            <View style={[styles.calcbutton, styles.action]}>
              <Text style={styles.calcnumberSpecial}>AC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => back()}>
          <View style={[styles.calcbutton, styles.action]}>
          <Icon name="backspace" size={20} color="black" />
            {/* <Text style={styles.calcnumberSpecial}>&lt;</Text> */}
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => valueCalc('%')}>
          <View style={[styles.calcbutton, styles.action]}>
            <Text style={styles.calcnumberSpecial}>%</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => valueCalc('/')}>
          <View style={[styles.calcbutton, styles.lastChild]}>
            <Text style={styles.calcnumber}>/</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          {topLayer.map((item) => (
            <TouchableOpacity key={item} onPress={() => valueCalc(item)}>
              <View style={styles.calcbutton}>
                <Text style={styles.calcnumber}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => valueCalc('*')}>
            <View style={[styles.calcbutton, styles.lastChild]}>
              <Text style={styles.calcnumber}>X</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          {midLayer.map((item) => (
            <TouchableOpacity key={item} onPress={() => valueCalc(item)}>
              <View style={styles.calcbutton}>
                <Text style={styles.calcnumber}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => valueCalc('-')}>
          <View style={[styles.calcbutton, styles.lastChild]}>
            <Text style={styles.calcnumber}>-</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          {bottomLayer.map((item) => (
            <TouchableOpacity key={item} onPress={() => valueCalc(item)}>
              <View style={styles.calcbutton}>
                <Text style={styles.calcnumber}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => valueCalc('+')}>
          <View style={[styles.calcbutton, styles.lastChild]}>
            <Text style={styles.calcnumber}>+</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.calcbutton, styles.zero]} onPress={() => valueCalc(0)}>
          <View>
            <Text style={styles.calcnumber}>0</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => valueCalc('.')}>
          <View style={styles.calcbutton}>
            <Text style={styles.calcnumber}>.</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>solve()}>
          <View style={[styles.calcbutton, styles.lastChild]}>
            <Text style={styles.calcnumber}>=</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  output: {
    height: '50%',
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttons: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-start",
  },
  calcbutton: {
    height: 50,
    width: 50,
    backgroundColor: "#1a1a1a",
    color: "#fff",
    shadowColor: "#fff",
    elevation: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 10,
  },
  calcnumber: {
    color: "#fff",
    fontWeight:"bold"
  },
  calcnumberSpecial:{
    color: "#000",
    fontWeight:"bold",
    fontSize:18
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  lastChild: {
    backgroundColor: "#FF5733",
  },
  zero: {
    width: "39%",
  },
  action: {
    backgroundColor: "grey",
  },
  outputText: {
    color: "white",
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 50,
  },
});

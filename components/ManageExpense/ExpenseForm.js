import { Button, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

const ExpenseForm = () => {
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const confirmHandler = () => {
        console.log(amount, date, description);
    }
    const onSubmitHandler = () => {
        const amountIsValid = !isNaN(amount) && +amount > 0;
        const dateIsValid = date.trim().length > 0 && date.trim().length <= 10;
        const descriptionIsValid = description.trim().length > 0;
        console.log(amount, date, description);
    }
  return (
    <View style={styles.form}> 
    <Text style={styles.title}>Your expense</Text>
        <View style={styles.amountContainer}>
            <Input
                label={"Amount"}
                textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: (text) => {
                    setAmount(text);
                },
                value: amount,
                }}
                style={{flex:1}}
            />
            <Input
                label={"Date"}
                textInputConfig={{
                keyboardType: "default",
                placeholder: "MM/DD/YYYY",
                onChangeText: (text) => {
                    setDate(text);
                },
                maxLength: 10,
                value: date,
                }}
                style={{flex:1}}
            />

        </View>
      <Input
        label={"Description"}
        textInputConfig={{
          keyboardType: "default",
          onChangeText: (text) => {
            setDescription(text);
          },
          value: description,
          multiline: true,
          autoCorrect: false,
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{width: "30%", marginRight: 5}}>
            <Button title="Cancel" onPress={confirmHandler} />
        </View>
        <View style={{width: "30%"}}>
            <Button title="Add" onPress={onSubmitHandler} /> 
        </View>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
    form:{
        marginTop: 80,
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 16,
        color:"white",
        textAlign: "center",
    },
    amountContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    }

});
export default ExpenseForm;

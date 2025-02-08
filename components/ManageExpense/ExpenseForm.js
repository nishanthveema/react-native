import { Button, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import { postRequest } from "../../constants/axios";

const ExpenseForm = ({action, id}) => {
    console.log(action, id);
    const [formData, setFormData] = useState({
        amount: "",
        date: "",
        description: "",
    });

    const onChangeFormHandler = (type, text) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [type]: text,
            };
        });
    }
    
    const confirmHandler = () => {
        console.log(formData);
    }
    const onSubmitHandler = async () => {
        const amountIsValid = !isNaN(formData.amount) && +formData.amount > 0;
        const dateIsValid = formData.date.trim().length > 0 && formData.date.trim().length <= 10;
        const descriptionIsValid = formData.description.trim().length > 0;
        try{
            const store = await postRequest( formData);
            console.log(store);

        }catch(err){
            console.log(err);
        }finally{

        }
    }
  return (
    <View style={styles.form}> 
    <Text style={styles.title}>Your expense</Text>
        <View style={styles.amountContainer}>
            <Input
                label={"Amount"}
                textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: onChangeFormHandler.bind(this, "amount"),
                value: formData.amount,
                }}
                style={{flex:1}}
            />
            <Input
                label={"Date"}
                textInputConfig={{
                keyboardType: "default",
                placeholder: "MM/DD/YYYY",
                onChangeText: onChangeFormHandler.bind(this, "date"),
                maxLength: 10,
                value: formData.date,
                }}
                style={{flex:1}}
            />

        </View>
      <Input
        label={"Description"}
        textInputConfig={{
          keyboardType: "default",
          onChangeText: onChangeFormHandler.bind(this, "description"),
          value: formData.description,
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

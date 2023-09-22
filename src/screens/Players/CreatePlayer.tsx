import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../../components/MyHeader";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import MyText from "../../components/MyText";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  CenteredLineWithText,
  PhoneNumberInput,
  SelectionComponent,
} from "../../components";
import { Colors } from "../../constants/Colors";
import { addPlayer } from "../../services/players";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CreatePlayer = ({ navigation }) => {
  const gotoPlayerProfile = (id: string) =>
    navigation.navigate("PlayerProfile", { id });
  const options = [
    { label: "Male", icon: "male" },
    { label: "Female", icon: "female-sharp" },
    { label: "Other", icon: "add" },
  ];
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState(options[0].label);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const dispatch = useDispatch<AppDispatch>();

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleCreaterPlayer = () => {
    const request = {
      first_name: firstName,
      last_name: lastName,
      dbo: {
        date: "27",
        month: "2",
        year: "1990",
      },
      gender: selectedOption,
      phonenumber: phoneNumber,
      avatarimage: 10,
    };
    dispatch(addPlayer({ data: request })).then((res) => {
      const resData = res.payload?.data;
      console.log("=====resData====", resData);
      gotoPlayerProfile(res.payload?.data._id);
    });
  };

  const handleConfirm = (date) => {
    setDatePickerVisibility(false);
    setSelectedDate(date);
    setDob(date ? date.toISOString().split('T')[0] : '');
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Header
          title="Create Player"
          hasActionIcon
          actionBtnPress={handleCreaterPlayer}
          ActionIcon={<Feather name="check" size={18} color={"#fff"} />}
          backgroundColor={"#E8E8E8"}
          isActionBtnDisabled={
            !firstName || !lastName || !selectedDate || !selectedOption || !phoneNumber
          }
        />
        <View
          style={{
            backgroundColor: "#E8E8E8",
            padding: 25,
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 70,
          }}
        >
          <Image
            source={require("../../assets/images/group904.png")}
            style={{
              alignSelf: "center",
              borderWidth: 2,
              borderColor: Colors.darkslategray,
              borderRadius: 100,
              width: 90,
              height: 90
            }}
          />
        </View>
        <View style={styles.mainView}>
          <TextInput
            mode="outlined"
            label="First Name"
            placeholder="First Name"
            activeOutlineColor="grey"
            placeholderTextColor={"#000"}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <View style={{ height: "3%" }} />
          <TextInput
            mode="outlined"
            label="Last Name"
            placeholder="Last Name"
            activeOutlineColor="grey"
            placeholderTextColor={"#000"}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <View style={{ height: "4%" }} />
          <PhoneNumberInput
            phoneNumber={phoneNumber}
            onChangePhoneNumber={(phone: string) => {
              setPhoneNumber(phone);
            }}
            inputContainerWidth={'73%'}
          />
          <View style={{ height: "3%" }} />
          <TextInput
            mode="outlined"
            label="Date of Birth"
            placeholder="Date of Birth"
            activeOutlineColor="grey"
            placeholderTextColor={"#000"}
            value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
            onChangeText={(text) => setDob(text)}
            onPressIn={showDatePicker}
          />
          <CenteredLineWithText lineText="Gender" />
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {options.map((option, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => handleOptionPress(option.label)}
                  style={[
                    styles.option,
                    selectedOption === option.label && styles.selectedOption,
                  ]}
                >
                  <Ionicons
                    name={option.icon}
                    size={50}
                    color={
                      selectedOption === option.label
                        ? Colors.darkslategray
                        : Colors.gray
                    }
                  />
                  <MyText
                    text={option.label}
                    center={true}
                    color={
                      selectedOption === option.label
                        ? Colors.darkslategray
                        : Colors.gray
                    }
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={selectedDate}
      />
    </React.Fragment>
  );
};
export default CreatePlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainView: {
    padding: 20,
  },
  option: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 5,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedOption: {
    borderColor: "#000",
  },
});

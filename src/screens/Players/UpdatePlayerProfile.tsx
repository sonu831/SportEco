import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/MyHeader'
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import MyText from '../../components/MyText';
import Ionicons from "react-native-vector-icons/Ionicons";
import { CenteredLineWithText, PhoneNumberInput, SelectionComponent } from '../../components';
import { Colors } from '../../constants/Colors';


const UpdatePlayerProfile = ({ navigation }) => {
    const gotoPlayerProfile = () => navigation.navigate('PlayerProfile')
    const options = [
        { label: "Male", icon: "male" },
        { label: "Female", icon: "female-sharp" },
        { label: "Other", icon: "add" },
    ];
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [dob, setDob] = React.useState("")
    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [selectedOption, setSelectedOption] = React.useState(options[0].label);

    const handleOptionPress = (option) => {
        setSelectedOption(option)
    };
    return (
        <View style={styles.container}>
            <Header
                title='Create Player'
                hasActionIcon
                actionBtnPress={gotoPlayerProfile}
                ActionIcon={<Feather name="check" size={18} color={"#fff"}

                />}
                backgroundColor={"#FBF1D8"}
            />
            <View
                style={{
                    backgroundColor: "#FBF1D8",
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
                        borderRadius: 100
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
                <View style={{ height: "3%" }} />
                <PhoneNumberInput
                    phoneNumber={phoneNumber}
                    onChangePhoneNumber={(phone: string) => {
                        setPhoneNumber(phone)
                    }}
                />
                <View style={{ height: "3%" }} />
                <TextInput
                    mode="outlined"
                    label="Date of Birth"
                    placeholder="Date of Birth"
                    activeOutlineColor="grey"
                    placeholderTextColor={"#000"}
                    value={dob}
                    onChangeText={(text) => setDob(text)}
                />
                <CenteredLineWithText lineText="Gender" />
                <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                    {options.map((option, index) => (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => handleOptionPress(option.label)}
                                style={[
                                    styles.option,
                                    selectedOption === option.label && styles.selectedOption,
                                ]}
                            >
                                <Ionicons name={option.icon} size={50} color={selectedOption === option.label ? Colors.darkslategray : Colors.gray} />
                                <MyText text={option.label} center={true} color={selectedOption === option.label ? Colors.darkslategray : Colors.gray} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}
export default UpdatePlayerProfile

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
    },
    selectedOption: {
        borderColor: "#000",
    },
})
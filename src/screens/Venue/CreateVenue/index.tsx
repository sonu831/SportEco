import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../../components/MyHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { TextInput } from "react-native-paper";
import MyButton from "../../../components/MyButton";
import { styles } from "./styles";
import { Colors } from "../../../constants/Colors";
import MyText from "../../../components/MyText";
import useCreateVenue from "./useCreateVenue";
import AddressComponent from "../AddressComponent";
import useImagePicker from "../../../components/ImagePicker/useImagePicker";

const CreateVenue = ({ navigation, currentImage, route }) => {
  const {
    state,
    isEdit,
    handleGoBack,
    goToChooseLocation,
    handleImage,
    handleChange,
    handleVenueSubmit,
    handleVenueUpdate,
  } = useCreateVenue();
  const { venueName, sport, courtName, venueDescription, image, address } =
    state;

  const { pickImage } = useImagePicker({ handleImage });

  const renderActionButton = () => {
    if (address)
      return (
        <MyButton
          width={"100%"}
          alignSelf="center"
          title={isEdit ? "Update" : "Save"}
          leftIcon={
            <Feather
              name="map"
              size={20}
              color={"#FFF"}
              style={{ marginRight: 10 }}
            />
          }
          onPress={isEdit ? handleVenueUpdate : handleVenueSubmit}
        />
      );
    else
      return (
        <MyButton
          width={"100%"}
          alignSelf="center"
          title="Select Location"
          leftIcon={
            <Feather
              name="map"
              size={20}
              color={"#FFF"}
              style={{ marginRight: 10 }}
            />
          }
          onPress={() => goToChooseLocation()}
        />
      );
  };

  const renderImagePlaceholder = () => {
    if (image) {
      return (
        <View>
          <Image source={{ uri: image }} style={styles.imageStyle} />
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              zIndex: 100,
            }}
            onPress={() => handleImage()}
          >
            <AntDesign name="delete" color={"#fff"} size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              zIndex: 100,
            }}
            onPress={() => pickImage("camera")}
          >
            <AntDesign name="pluscircleo" color={"#fff"} size={26} />
          </TouchableOpacity>
        </View>
      );
    } else if (!image) {
      return (
        <View style={styles.imagePickerStyle}>
          <TouchableOpacity onPress={() => pickImage("camera")}>
            <Image source={require("../../../assets/images/addImage.png")} />
          </TouchableOpacity>
          <MyText text="Add Images" />
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <Header title={isEdit ? "Edit Venue" : "Create Venue"} />
      {renderImagePlaceholder()}
      <View style={styles.mainView}>
        <TextInput
          mode="outlined"
          label="Venue Name"
          placeholder="Enter Venue Name"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={venueName}
          onChangeText={(text) => handleChange("venueName", text)}
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
            backgroundColor: "white",
            color: Colors.black2,
            marginBottom: 10,
          }}
        />
        <TextInput
          mode="outlined"
          label="Sport"
          placeholder="Enter Sport"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={sport}
          onChangeText={(text) => handleChange("sport", text)}
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
            backgroundColor: "white",
            color: Colors.black2,
            marginBottom: 10,
          }}
        />
        <TextInput
          mode="outlined"
          label="Court Name"
          placeholder="Enter Court Name"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={courtName}
          onChangeText={(text) => handleChange("courtName", text)}
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
            backgroundColor: "white",
            color: Colors.black2,
            marginBottom: 10,
          }}
        />
        <TextInput
          mode="outlined"
          label="Venue Description (Optional)"
          placeholder="Enter Venue Description"
          activeOutlineColor="grey"
          placeholderTextColor={"#000"}
          value={venueDescription}
          multiline
          onChangeText={(text) => handleChange("venueDescription", text)}
          style={{
            borderBottomWidth: 0,
            borderColor: "grey",
            backgroundColor: "white",
            color: Colors.black2,
            marginBottom: 10,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "flex-end",
        }}
      >
        {address && (
          <View
            style={{
              borderColor: Colors.gray3,
              borderWidth: 1, // Add this line
              display: "flex",
            }}
          >
            <AddressComponent
              address={address}
              isEditLocation
              handleEditLocation={goToChooseLocation}
            />
          </View>
        )}
        {renderActionButton()}
      </View>
    </View>
  );
};

export default CreateVenue;

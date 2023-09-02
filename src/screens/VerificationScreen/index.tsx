import {
  Text,
  Pressable,
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../../constants/Colors";
import { Input } from "react-native-elements";
import imageBg from "../../assets/images/image_bg.png";
import enterNumberImage from "../../assets/images/enter_number.png";
import loginImage from "../../assets/images/loginImage.png";
// import accountVerifiedImage from "../../assets/images/account_verified.png";
import enterCodeImage from "../../assets/images/enter_code.png";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import { useVerificationScreen } from "./useVerificationScreen";
import { RootStackScreenProps } from "../Navigation/types";
import SafeArea from "../../components/SafeArea";
import Button from "../../components/Button";
import {
  TitleText,
  CenteredLineWithText,
  PhoneNumberInput,
  SocialButton,
  TermsAndConditions,
} from "../../components";
import Header from "../../components/Header";

const CELL_COUNT = 6;

const VerificationScreen = ({
  navigation,
}: RootStackScreenProps<"Verification">) => {
  const {
    getCellOnLayoutHandler,
    phoneInput,
    codeProps,
    setValidationCode,
    styles,
    validCodeRef,
    validationCode,
    isPhNumValid,
    handleCreateAccount,
    state,
    handleOTPValidation,
    updateState,
  } = useVerificationScreen({ navigation });

  const { accountVerified, codeSent, invalidCode, phNum } = state;

  const handleGoogleLogin = () => {};
  const handleWhatsappLogin = () => {};

  const loginScreen = (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={loginImage} style={styles.loginImageBg} />
      </View>
      <View style={{ flex: 1.2 }}>
        <ScrollView>
          <TitleText text={`India's Largest Sports Community`} center />
          <CenteredLineWithText lineText="Log in or Sign up" />
          <PhoneNumberInput
            phoneNumber={phNum}
            onChangePhoneNumber={(phone: string) => {
              updateState({
                key: "phNum",
                value: phone,
              });
            }}
          />
          <Button
            style={{ width: "90%", alignSelf: "center" }}
            label="Continue"
            onPress={handleCreateAccount}
          />
          <CenteredLineWithText lineText="or" />
          <View style={styles.socialBtn}>
            <SocialButton onPress={handleGoogleLogin} icon={"google"} />
            <SocialButton onPress={handleWhatsappLogin} icon={"whatsapp"} />
          </View>
          <TermsAndConditions />
        </ScrollView>
      </View>
    </View>
  );

  return (
    <SafeArea classNames={styles.container}>
      {codeSent ? (
        <View style={styles.containerView}>
          {/* <Pressable
            style={styles.backButton}
            onPress={() =>
              navigation.navigate(accountVerified ? "Home" : "Landing")
            }
          >
            <Entypo name="chevron-left" size={20} color={Colors.darkGray} />
          </Pressable> */}
          <Header title={"OTP Verification"} />
          <View>
            <View style={styles.logo}>
              {/* <ImageBackground source={imageBg} style={styles.imageBg}>
                <Image source={enterCodeImage} />
              </ImageBackground> */}
              <View>
                {invalidCode ? (
                  <View style={styles.numContainer}>
                    <Text style={styles.incorrect}>Incorrect code!</Text>
                    <Text style={styles.send}>Please try again</Text>
                  </View>
                ) : (
                  <>
                    <View style={{ height: 40 }} />
                    <View style={styles.numContainer}>
                      <Text style={styles.send}>
                        Verification code sent to{" "}
                      </Text>
                      <Text style={styles.num}>{phNum}</Text>
                    </View>
                  </>
                )}
              </View>
            </View>
            <View style={styles.centerContainer}>
              <CodeField
                ref={validCodeRef}
                {...codeProps}
                value={validationCode}
                onChangeText={setValidationCode}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              {invalidCode ? (
                <View style={[styles.numContainer, styles.mt43]}>
                  <Text style={styles.send}>OR</Text>
                </View>
              ) : (
                <View style={[styles.resendContainer, styles.mt15]}>
                  <Text style={styles.resendTextStyle}>
                    Didn't receive code?{" "}
                  </Text>
                  <Text style={styles.resendButtonTextStyle}>Resend</Text>
                </View>
              )}
              {invalidCode ? (
                <Button
                  style={{ width: "90%", alignSelf: "center" }}
                  label="Resend Code"
                  onPress={() =>
                    updateState({
                      key: "invalidCode",
                      value: false,
                    })
                  }
                />
              ) : (
                <Button
                  style={{ width: "90%", alignSelf: "center" }}
                  label="Verify and create account"
                  onPress={handleOTPValidation}
                />
                // <TouchableOpacity
                //   style={[
                //     styles.createBtn,
                //     validationCode.length !== 6 && styles.disabledBtn,
                //   ]}
                //   onPress={handleOTPValidation}
                // >
                //   <Text style={styles.buttonText}>
                //     Verify and create account
                //   </Text>
                // </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      ) : (
        loginScreen
      )}
    </SafeArea>
  );
};

export default VerificationScreen;

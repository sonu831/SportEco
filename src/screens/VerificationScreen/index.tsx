import React from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import loginImage from "../../assets/images/loginImage.png";
// import accountVerifiedImage from "../../assets/images/account_verified.png";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import { useVerificationScreen } from "./useVerificationScreen";
import { RootStackScreenProps } from "../Navigation/types";
import SafeArea from "../../components/SafeArea";
import Button from "../../components/Button";
import {
  TitleText,
  CenteredLineWithText,
  PhoneNumberInput,
  TermsAndConditions,
} from "../../components";
import Header from "../../components/Header";
import MyText from "../../components/MyText";

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

  const handleGoogleLogin = () => { };
  const handleWhatsappLogin = () => { };

  const loginScreen = (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={loginImage} style={styles.loginImageBg} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
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
        <View style={[styles.continueBtn, { marginVertical: -25 }]}>
          <Button label="Continue" onPress={handleCreateAccount} />
        </View>
        {/* <CenteredLineWithText lineText="or" />
          <View style={styles.socialBtn}>
            <SocialButton onPress={handleGoogleLogin} icon={"google"} />
            <SocialButton onPress={handleWhatsappLogin} icon={"whatsapp"} />
          </View> */}
        <TermsAndConditions />
      </View>
    </View>
  );

  return (
    <SafeArea classNames={styles.container}>
      {codeSent ? (
        <>
          <Header title={"OTP Verification"} onBackPress={() => navigation.goBack()} />
          <View style={styles.containerView}>
            <>
              <View style={{ height: 40 }} />
              <View style={styles.numContainer}>
                <MyText style={styles.send} text={" Verification code sent to"} />
                <MyText style={styles.num} text={phNum} fontFamily="BOLD" />
              </View>
            </>
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
                    style={[styles.cell, isFocused && styles.focusCell, invalidCode && styles.inValidOtp]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              <View style={[styles.resendContainer, styles.mt15]}>
                <MyText style={styles.resendTextStyle} text="Didn't receive the code? " />
                <MyText style={styles.resendButtonTextStyle} text="Resend" center={true} fontWeight="600" />
              </View>
            </View>
          </View>
          <View style={{ height: '10%' }} />
          {invalidCode ?
            <View style={styles.numContainer}>
              <MyText style={styles.incorrect} text={"Invalid or incorrect OTP."} />
            </View> : null}
          <View style={{ justifyContent: 'flex-end', flex: 1 }}>
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
                style={{ width: "90%", alignSelf: "center", marginBottom: 10 }}
                label="Verify"
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
        </>
      ) : (
        loginScreen
      )}
    </SafeArea>
  );
};

export default VerificationScreen;

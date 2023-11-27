import { StyleSheet } from 'react-native'
import React, { useState, useCallback } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const useEditSession = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "EditSession">>();
    const { sessionInfo } = route.params || {};
    const { _id = sessionInfo?._id, session_name = sessionInfo?.name, session_desc = sessionInfo?.description, session_dur = sessionInfo.duration } = sessionInfo || {};
    const [sessionName, setSessionName] = useState(session_name)
    const [sessionDescription, setSessionDescription] = useState(session_desc)
    const [sessionDuration, setSessionDuration] = useState(session_dur)
    // Redux dispatch and navigation hook
    const dispatch = useDispatch();
    //Function:To delete the sessions
    // const handleDeleteSession = useCallback(async (_id: string) => {
    //     if (!_id) return;
    //     try {
    //         const res = await dispatch((_id)).unwrap();
    //         if (res?.success) {
    //             navigation.replace("Programs", { shouldRefresh: true });
    //         } else {
    //             console.log("Program deletion was not successful");
    //         }
    //     } catch (error) {
    //         console.error("Failed to delete Program:", error);
    //     }
    // }, [_id, dispatch, navigation]);
    return {
        sessionName,
        setSessionName,
        sessionDescription,
        setSessionDescription,
        sessionDuration,
        setSessionDuration
    }
}

export default useEditSession

const styles = StyleSheet.create({})
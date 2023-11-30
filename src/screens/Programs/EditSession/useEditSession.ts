import { StyleSheet } from 'react-native'
import React, { useState, useCallback } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { deleteSessionInProgram } from '../../../services/programs';

const useEditSession = () => {
    // var
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<RouteProp<RootStackParamList, "EditSession">>();
    // var
    const { sessionInfo, programDetails } = route.params || {};
    const { _id = sessionInfo?._id, session_name = sessionInfo?.name, session_desc = sessionInfo?.description, session_dur = sessionInfo.duration } = sessionInfo || {};
    // hook : state
    const [sessionName, setSessionName] = useState(session_name)
    const [sessionDescription, setSessionDescription] = useState(session_desc)
    const [sessionDuration, setSessionDuration] = useState(session_dur)
    // Redux dispatch and navigation hook
    const dispatch = useDispatch();
    //Function:To delete the sessions
    const handleDeleteSession = useCallback(async () => {
        const request = {
            program_id: programDetails?._id,
            session_id: sessionInfo?._id
        };
        try {
            const res = await dispatch(deleteSessionInProgram(request)).unwrap()
            if (res?.success) {
                navigation.replace("Programs", { shouldRefresh: true });
            }
        } catch (error) {
            console.error("Error adding players to batch:", error);
        }
    }, [dispatch]);
    return {
        sessionName,
        setSessionName,
        sessionDescription,
        setSessionDescription,
        sessionDuration,
        setSessionDuration,
        handleDeleteSession
    }
}

export default useEditSession

const styles = StyleSheet.create({})
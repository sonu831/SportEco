import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/types";
import { RouteProp } from "@react-navigation/native";
import { AppDispatch } from "../../store";
import { fetchPlayers } from "../../services/players";
import { fetchBatches } from "../../services/batches";
import { players$ } from "../../store/players/selectors";
import { batches$ } from "../../store/batches/selectors";
import { setSelectedBatch } from "../../store/batches/reducers";
import { setSelectedPlayer } from "../../store/players/reducers";
import { venueList$ } from "../../store/venue/selectors";
import { setSelectedVenue } from "../../store/venue/reducers";
import { fetchVenueList } from "../../services/venue";
import { fetchPrograms } from "../../services/programs";
import { programList$ } from "../../store/programs/selectors";
import { setSelectedProgram } from "../../store/programs/reducers";

const useCommonScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  route: RouteProp<RootStackParamList, "CommonScreen">;
}) => {
  const { title, shouldRefresh = false } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const players: any[] = useSelector(players$);
  const batchList: any[] = useSelector(batches$);
  const venueList: any[] = useSelector(venueList$);
  const programList: any[] = useSelector(programList$);

  const showPlayers = title.toLowerCase() === "players";
  const showBatches = title.toLowerCase() === "batches";
  const showPrograms = title.toLowerCase() === "programs";
  const showVenues = title.toLowerCase() === "venues";

  const handleGoBack = () => navigation.goBack();

  const handleClickOnProfile = (player: any) => {
    const navigateToScreen = showPlayers ? "Profile" : "BatchScreen";
    const navigateToScreenOption = showPlayers ? { player: true } : {};

    if (showPlayers) {
      dispatch(setSelectedPlayer(player));
    } else {
      dispatch(setSelectedBatch(player));
    }

    navigation.navigate(navigateToScreen, navigateToScreenOption);
  };

  const handleVenueListItemClick = (venue: any) => {
    dispatch(setSelectedVenue(venue));
    navigation.navigate("VenueDetail");
  };

  const handleProgramListItemClick = (program: any) => {
    dispatch(setSelectedProgram(program));
    navigation.navigate("ProgramDetails");
  };

  const handleAddIcon = () => {
    if (showPlayers)
      navigation.navigate("EditProfile", {
        isAddPlayer: true,
      });
    else if (showPrograms) navigation.navigate("AddProgram");
    else navigation.navigate("AddBatch");
  };

  const dataToShow = showPlayers
    ? players
    : showVenues
    ? venueList
    : showPrograms
    ? programList
    : batchList;

  useEffect(() => {
    if (showPlayers) dispatch(fetchPlayers());
    else if (showBatches) dispatch(fetchBatches());
    else if (showVenues) dispatch(fetchVenueList());
    else if (showPrograms) dispatch(fetchPrograms());
  }, [dispatch, shouldRefresh]);

  return {
    handleGoBack,
    players,
    title,
    handleClickOnProfile,
    showPlayers,
    showBatches,
    dataToShow,
    showPrograms,
    handleAddIcon,
    showVenues,
    venueList,
    handleVenueListItemClick,
    handleProgramListItemClick,
  };
};

export default useCommonScreen;

import homeIcon from "../assets/images/home.png";
import calendarIcon from "../assets/images/calender.png";
import messageIcon from "../assets/images/message.png";
import profileIcon from "../assets/images/profile.png";
import { RootBottomTabParamList } from "../screens/Navigation/types";

type BottomTabBarProps = {
  name: keyof RootBottomTabParamList;
  onPress: any;
  title: string;
  tabBarIcon: any;
};

export const BottomTabBar: ({
  navigation,
}: {
  navigation: any;
}) => BottomTabBarProps[] = ({ navigation }) => [
  {
    name: "Main",
    onPress: () => navigation.navigate("Main"),
    title: "",
    tabBarIcon: homeIcon,
  },
  {
    name: "Calendar",
    onPress: () => navigation.navigate("CalendarScreen"),
    title: "",
    tabBarIcon: calendarIcon,
  },
  {
    name: "Message",
    onPress: () => navigation.navigate("Message"),
    title: "",
    tabBarIcon: messageIcon,
  },
  {
    name: "Profile",
    onPress: () => navigation.navigate("Profile"),
    title: "",
    tabBarIcon: profileIcon,
  },
];

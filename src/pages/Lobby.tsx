import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type LobbyProps = NativeStackScreenProps<RootStackParamList, "Lobby"> & {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Lobby = ({ setIsAuthenticated }: LobbyProps) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Lobby</Text>
    </View>
  )
}

export default Lobby
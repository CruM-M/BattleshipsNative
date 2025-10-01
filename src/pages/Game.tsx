import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

const Game = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Game</Text>
    </View>
  )
}

export default Game
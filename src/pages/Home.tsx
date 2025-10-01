import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <Text>Home</Text>
      <View>
        <Button onPress={() => navigation.navigate("Login")}>
          Login
        </Button>
        <Button onPress={() => navigation.navigate("Register")}>
          Register
        </Button>
      </View>
    </View>
  )
}

export default Home
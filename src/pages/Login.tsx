import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login"> & {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Login = ({ setIsAuthenticated }: LoginProps) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login
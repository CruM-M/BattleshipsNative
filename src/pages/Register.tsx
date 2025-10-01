import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RegisterProps = NativeStackScreenProps<RootStackParamList, "Register"> & {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Register = ({ setIsAuthenticated }: RegisterProps) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register
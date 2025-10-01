import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

const NotFound = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>NotFound</Text>
    </View>
  )
}

export default NotFound
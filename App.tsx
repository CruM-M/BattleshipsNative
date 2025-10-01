import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/pages/Home";
import Register from "./src/pages/Register";
import Login from "./src/pages/Login";
import Lobby from "./src/pages/Lobby";
import Game from "./src/pages/Game";
import NotFound from "./src/pages/NotFound";

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
  Lobby: undefined;
  Game: { gameId: string };
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch(
          "https://bsplatform.duckdns.org/api/check-auth", {
            method: "GET",
            headers: {
              "Accept": "application/json",
            },
          }
        );

        const data = await response.json();

        if (data.isAuthenticated) {
          setIsAuthenticated(true);
          console.log("Authenticated", data.isAuthenticated)
        }  else {
          setIsAuthenticated(false);
          console.log("Not Authenticated", data.isAuthenticated)
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        console.log("Error")
        setIsAuthenticated(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#48dd2aff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}

type RootStackProps = {
  isAuthenticated: boolean | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
};

function RootStack({ isAuthenticated, setIsAuthenticated }: RootStackProps) {
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Lobby">
            {(props) => <Lobby
              {...props} setIsAuthenticated={setIsAuthenticated}
            />}
          </Stack.Screen>
          <Stack.Screen name="Game" component={Game} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register">
            {(props) => <Register
              {...props} setIsAuthenticated={setIsAuthenticated}
            />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {(props) => <Login
              {...props} setIsAuthenticated={setIsAuthenticated}
            />}
          </Stack.Screen>
        </>
      )}
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Auth_Screen_Titles } from '../../constants/Screens'
import Login from '../../screens/authentication/Login'
import Welcome from '../../screens/authentication/Welcome'
import Registration from '../../screens/authentication/Registration'
const Stack = createNativeStackNavigator()

export default function AuthStackNavigation() {
  const screens = [
    {
      name: Auth_Screen_Titles.WELCOME,
      component: Welcome,
    },
    {
      name: Auth_Screen_Titles.LOGIN,
      component: Login,
    },
    {
      name: Auth_Screen_Titles.REGISTER,
      component: Registration,
    },
  ]

  return (
    <Stack.Navigator>
      {screens.map((screen) => (
        <Stack.Screen
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  )
}

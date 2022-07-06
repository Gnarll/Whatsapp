import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/StackNavigation';
import { AuthProvider } from './src/useAuth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
}

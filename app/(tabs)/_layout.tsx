import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const TabsLayout = () => {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: Platform.OS === 'ios' ? 8 : 0,
        },
        tabBarLabelStyle: {
          fontFamily: 'Norse-Bold',
          fontSize: 12,
        },
        tabBarBackground: () => (
          <BlurView
            experimentalBlurMethod="dimezisBlurView" // To make this work on Android
            intensity={90}
            className="absolute inset-0 overflow-hidden rounded-tl-2xl rounded-tr-2xl"
          />
        ),
      }}
    >
      <Tabs.Screen
        name="(button)"
        options={{
          headerShown: false,
          title: t('button'),
          tabBarIcon: ({ color }) => <MaterialIcons name="smart-button" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="table"
        options={{
          headerShown: false,
          title: t('table'),
          tabBarIcon: ({ color }) => <MaterialIcons name="table-chart" size={20} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

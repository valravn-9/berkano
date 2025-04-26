import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

const ButtonTabLayout = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitleStyle: { fontFamily: 'Norse-Bold' },
          headerLargeTitleStyle: { fontFamily: 'Norse-Bold' },
          headerTitle: t('button'),
        }}
      />
    </Stack>
  );
};

export default ButtonTabLayout;

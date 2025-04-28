import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

const TableTabLayout = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitleStyle: { fontFamily: 'Norse-Bold' },
          headerLargeTitleStyle: { fontFamily: 'Norse-Bold' },
          headerTitle: t('table'),
        }}
      />
    </Stack>
  );
};

export default TableTabLayout;

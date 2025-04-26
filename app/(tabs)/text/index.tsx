import { ScrollView, View } from 'react-native';
import { Text } from '@/components/ui/text';

const TextScreen = () => {
  return (
    <ScrollView contentContainerClassName="flex-1 p-4 gap-12">
      <View className="gap-4">
        <Text className="text-6xl">Text</Text>
      </View>
    </ScrollView>
  );
};

export default TextScreen;

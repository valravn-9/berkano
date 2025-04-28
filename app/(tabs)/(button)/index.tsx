import { ScrollView, View } from 'react-native';
import { Button, Text } from '@/components/ui';
import { FontAwesome6 } from '@expo/vector-icons';

const ButtonScreen = () => {
  return (
    <ScrollView contentContainerClassName="flex-1 p-4 gap-12">
      <View className="gap-4">
        <Text className="text-3xl">Sizes</Text>
        <Button size="lg" onPress={() => console.log('Button pressed!')}>
          <Text>Large</Text>
        </Button>
        <Button size="default" onPress={() => console.log('Button pressed!')}>
          <Text>Default</Text>
        </Button>
        <Button size="sm" onPress={() => console.log('Button pressed!')}>
          <Text>Small</Text>
        </Button>
        <Button size="icon" onPress={() => console.log('Button pressed!')}>
          <FontAwesome6 name="icons" size={20} />
        </Button>
      </View>
      <View className="gap-4">
        <Text className="text-3xl">Variants</Text>
        <Button variant="default" onPress={() => console.log('Button pressed!')}>
          <Text>Default</Text>
        </Button>
        <Button variant="destructive" onPress={() => console.log('Button pressed!')}>
          <Text>Destructive</Text>
        </Button>
        <Button variant="outline" onPress={() => console.log('Button pressed!')}>
          <Text>Outline</Text>
        </Button>
        <Button variant="secondary" onPress={() => console.log('Button pressed!')}>
          <Text>Secondary</Text>
        </Button>
        <Button variant="ghost" onPress={() => console.log('Button pressed!')}>
          <Text>Ghost</Text>
        </Button>
        <Button variant="link" onPress={() => console.log('Button pressed!')}>
          <Text>Link</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default ButtonScreen;

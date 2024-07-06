import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  Fade,
  FadeSlideDown,
  FadeSlideUp,
  PureTransition,
  SlideDown,
  SlideUp,
} from 'react-native-pure-transition';
import type { TransitionType } from '../../src/PureTransition';

const transitionType = [
  'fade',
  'slide-up',
  'slide-down',
  'fade-slide-up',
  'fade-slide-down',
] as const;

const TransitionItemMap = {
  'fade': Fade,
  'slide-up': SlideUp,
  'slide-down': SlideDown,
  'fade-slide-up': FadeSlideUp,
  'fade-slide-down': FadeSlideDown,
};

const Item = ({
  transitionType,
  onPress,
  isVisible,
}: {
  transitionType: TransitionType;
  onPress: () => void;
  isVisible: boolean;
}) => {
  const TransitionItem = TransitionItemMap[transitionType];
  return (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PureTransition
        entering={TransitionItem.duration(1000)}
        isVisible={isVisible}
        style={{ paddingVertical: 12 }}
        exiting={TransitionItem.duration(100).delay(500)}
        slideOffset={100}
      >
        <TouchableOpacity onPress={onPress}>
          <Text style={{ fontSize: 18 }}>{transitionType}</Text>
        </TouchableOpacity>
      </PureTransition>
    </View>
  );
};

export default function App() {
  const [transitionItem, setTransitionItem] = useState<TransitionType | null>(
    null
  );

  const startTransition = (type: TransitionType) => {
    setTransitionItem(type);
    setTimeout(() => setTransitionItem(null), 1000);
  };

  return (
    <View style={styles.container}>
      {transitionType.map((it, index) => (
        <Item
          key={index}
          transitionType={it}
          onPress={() => startTransition(it)}
          isVisible={transitionItem !== it}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

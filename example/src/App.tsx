import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  Fade,
  FadeSlideDown,
  FadeSlideUp,
  PureTransition,
  SlideDown,
  SlideUp,
} from '@pureboard/react-native-pure-transition';
import type { TransitionType } from '../../src/PureTransition';

const transitionType: TransitionType[] = [
  'fade',
  'slide-up',
  'slide-down',
  'fade-slide-up',
  'fade-slide-down',
];

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
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <PureTransition
        entering={TransitionItem.duration(1000)}
        isVisible={isVisible}
        exiting={TransitionItem.duration(1000)}
        slideOffset={50}
      >
        <Text style={styles.itemText}>{transitionType}</Text>
      </PureTransition>
    </TouchableOpacity>
  );
};

export default function App() {
  const [transitionItem, setTransitionItem] =
    useState<TransitionType[]>(transitionType);

  const toggleTransition = (type: TransitionType) => {
    setTransitionItem((prev) => {
      if (prev.includes(type)) {
        return prev.filter((it) => it !== type);
      }
      return [...prev, type];
    });
  };

  return (
    <View style={styles.container}>
      {transitionType.map((it, index) => (
        <Item
          key={index}
          transitionType={it}
          onPress={() => toggleTransition(it)}
          isVisible={transitionItem.includes(it)}
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
  itemContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 12,
    width: '80%',
    borderRadius: 8,
    paddingVertical: 12,
  },
  itemText: {
    fontSize: 18,
  },
});

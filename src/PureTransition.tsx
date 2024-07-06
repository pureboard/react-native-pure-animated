import React, { useState } from 'react';
import { Animated, type StyleProp, type ViewStyle } from 'react-native';
import { usePureTransition } from './hooks/usePureTransition';
import { useIsFirstRender } from './hooks/utils/useIsFirstRender';
import type {
  Fade,
  FadeSlideDown,
  FadeSlideUp,
  SlideDown,
  SlideUp,
} from './transition/Transition';

export type TransitionType =
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'fade-slide-up'
  | 'fade-slide-down';

export type Transition =
  | Fade
  | SlideUp
  | SlideDown
  | FadeSlideUp
  | FadeSlideDown;

interface PureTransitionProps {
  isVisible: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  entering?: Transition;
  exiting?: Transition;
  slideOffset?: number;
}

export const PureTransition = ({
  isVisible,
  children,
  entering,
  exiting,
  style,
  slideOffset,
}: PureTransitionProps) => {
  const [childrenVisible, setChildrenVisible] = useState(isVisible);
  const isFirstRender = useIsFirstRender();

  const enteringConfig = entering?.build?.();
  const exitingConfig = exiting?.build?.();

  const { fadeAnim, slideStyle, enter, exit } = usePureTransition({
    entering: enteringConfig?.type,
    exiting: exitingConfig?.type,
    hide: () => setChildrenVisible(false),
    show: () => setChildrenVisible(true),
    enteringDuration: enteringConfig?.duration,
    exitingDuration: exitingConfig?.duration,
    enteringDelay: enteringConfig?.delay || 0,
    exitingDelay: exitingConfig?.delay || 0,
    slideOffset,
  });

  const [prevIsVisibleProp, setPrevIsVisibleProp] = useState(isVisible);

  if (isFirstRender || isVisible !== prevIsVisibleProp) {
    isVisible ? enter() : exit();

    setPrevIsVisibleProp(isVisible);
  }

  return (
    <Animated.View
      style={[
        {
          display: childrenVisible ? 'flex' : 'none',
          opacity: fadeAnim,
        },
        slideStyle,
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
};

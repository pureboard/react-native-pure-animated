# react-native-pure-transition

react native pure transition은 reanimated를 사용하지 않고, React Native의 내장 Animated만을 사용해 Component Exiting animation 및 Fade, Slide 등 기본 animation preset을 손쉽게 적용하기 위해 만들었습니다.

## Installation

```sh
npm i @pureboard/react-native-pure-transition
yarn add @pureboard/react-native-pure-transition
```

## Usage

```js
import {
  Fade,
  PureTransition,
} from '@pureboard/react-native-pure-transition';

return (
  <PureTransition
    isVisible={isVisible}
    style={styles.outerTransition}
    entering={Fade.duration(300)}
    exiting={Fade.duration(300)}
  >
    {children}
  </PureTranstion>
)
// ...

const result = await multiply(3, 7);
```
## API Reference

### PureTransition
#### props
- `isVisible(boolean) required`: PureTransition은 exiting animation 구현을 위해 조건부 렌더링이 아니라 isVisible prop을 통해 노출 여부를 결정합니다. (isVisible이 false일 때 컴포넌트를 unmount 시키지 않고 style을 통해 노출 여부를 제어합니다.)   
- `entering(Transition)`: 아래에서 설명할 Animation Type을 받습니다. entering 애니메이션의 종류와 세부 옵션을 결정합니다.   
- `exiting(Transition)`: 아래에서 설명할 Animation Type을 받습니다. exiting 애니메이션의 종류와 세부 옵션을 결정합니다.
- `slideOffset(number)`: Slide Transition Animation 타입(SlideUp, SlideDown, FadeSlideUp, FadeSlideDown)에서 slide offset을 결정합니다. (default: 1000)


### Animation Type
기본적으로 Fade와, 상하 Slide를 조합한 5가지의 animation preset을 제공합니다. PureTransition의 entering, exiting props에 넘겨주어 원하는 animation을 실행합니다.   
chaining으로 duration, delay를 설정할 수 있습니다.
```js
<PureTransition
  {...}
  entering={Fade.duration(100)}
  exiting={FadeSlideUp.duration(500).delay(1000)}
>
```
`duration(number)`: 애니메이션 지속시간을 결정합니다. 단위는 ms. (default: 300)   
`delay(number)`: delay 만큼 기다렸다가 animation을 실행합니다. 단위는 ms. (default: 0)

#### Fade
#### FadeSlideDown
#### FadeSlideUp,
#### SlideDown,
#### SlideUp,

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

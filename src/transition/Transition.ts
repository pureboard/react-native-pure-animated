export interface TransitionConfig {
  duration: number;
  delay: number;
}

export class Transition {
  config: TransitionConfig;

  constructor() {
    this.config = {
      duration: 300,
      delay: 0,
    };
  }

  static duration(duration: number) {
    const instance = new this();
    instance.config.duration = duration;
    return instance;
  }

  // duration 메소드
  duration(duration: number) {
    this.config.duration = duration;
    return this;
  }

  static delay(delay: number) {
    const instance = new this();
    instance.config.delay = delay;
    return instance;
  }

  // delay 메소드
  delay(delay: number) {
    this.config.delay = delay;
    return this;
  }

  build() {
    return this.config;
  }
}

export class Fade extends Transition {
  static duration(duration: number) {
    return super.duration(duration) as Fade;
  }

  static delay(delay: number) {
    return super.delay(delay) as Fade;
  }

  build() {
    return { ...super.build(), type: 'fade' as const };
  }
}

export class SlideUp extends Transition {
  static duration(duration: number) {
    return super.duration(duration) as SlideUp;
  }

  static delay(delay: number) {
    return super.delay(delay) as SlideUp;
  }
  build() {
    return { ...super.build(), type: 'slide-up' as const };
  }
}

export class SlideDown extends Transition {
  static duration(duration: number) {
    return super.duration(duration) as SlideDown;
  }

  static delay(delay: number) {
    return super.delay(delay) as SlideDown;
  }
  build() {
    return { ...super.build(), type: 'slide-down' as const };
  }
}

export class FadeSlideUp extends Transition {
  static duration(duration: number) {
    return super.duration(duration) as FadeSlideUp;
  }

  static delay(delay: number) {
    return super.delay(delay) as FadeSlideUp;
  }
  build() {
    return { ...super.build(), type: 'fade-slide-up' as const };
  }
}

export class FadeSlideDown extends Transition {
  static duration(duration: number) {
    return super.duration(duration) as FadeSlideDown;
  }

  static delay(delay: number) {
    return super.delay(delay) as FadeSlideDown;
  }
  build() {
    return { ...super.build(), type: 'fade-slide-down' as const };
  }
}

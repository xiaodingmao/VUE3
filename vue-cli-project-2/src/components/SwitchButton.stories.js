// Button.stories.js

import Button from './SwitchButton.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SwitchButton',
  component: Button,
};

export const Primary = () => ({
  components: { Button },
  template: '<Button/>',
});
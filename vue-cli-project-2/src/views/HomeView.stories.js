// Button.stories.js

import HomeView from './HomeView.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue
  * to learn how to generate automatic ti
  */
  title: 'HomeView',
  component: HomeView,
};

const Template = (args) => ({
  components: { HomeView },
  setup() {
    return { ...args };
  },
  template: '<HomeView />',
});
export const Primary = Template.bind({});

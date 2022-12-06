// Button.stories.js

import SearchHeader from './SearchHeader.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Header',
  component: SearchHeader,
};

export const Primary = () => ({
  components: { SearchHeader },
  template: '<SearchHeader/>',
});
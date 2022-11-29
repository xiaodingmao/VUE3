// Button.stories.js

import SearchInput from './SearchInput.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SearchBox',
  component: SearchInput,
};

export const Primary = () => ({
  components: { SearchInput },
  template: '<SearchInput/>',
});
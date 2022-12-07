// Button.stories.js

import SortTool from './SortTool.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SortTool',
  component: SortTool,
};

export const Primary = () => ({
  components: { SortTool },
  template: '<SortTool/>',
});

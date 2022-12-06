// Button.stories.js

import MovieDetail from './MovieDetail.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MovieDetail',
  component: MovieDetail,
};

export const Primary = () => ({
  components: { MovieDetail },
  template: '<MovieDetail/>',
});
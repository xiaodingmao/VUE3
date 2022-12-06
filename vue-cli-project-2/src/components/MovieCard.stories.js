// Button.stories.js

import MovieCard from './MovieCard.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MovieCard',
  component: MovieCard,
};

export const Primary = () => ({
  components: { MovieCard },
  template: '<MovieCard/>',
});
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

const Template = (args) => ({
  components: { MovieCard },
  setup() {
    return { ...args };
  },
  template: '<MovieCard :movie="movie"/>',
});
export const Primary = Template.bind({});
Primary.args = {
  movie: {
    id: '11',
    title: 'PULP FICTION',
    rate: '4.3',
    type: 'ACTION',
    description: 'HFJHGJKGJTKHOPTKHPO',
    duration: '150MIN',
    coverUrl: 'https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg',
    releaseYear: '2013',
  },
};

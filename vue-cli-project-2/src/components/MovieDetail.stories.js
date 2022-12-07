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
const Template = (args) => ({
  components: { MovieDetail },
  setup() {
    return { ...args };
  },
  template: '<MovieDetail :movie="movie"/>',
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

import NoFilms from './NoFilms.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'NullResults',
  component: NoFilms,
};

export const Primary = () => ({
  components: { NoFilms },
  template: '<NoFilms/>',
});

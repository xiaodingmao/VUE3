// Button.stories.js

import MovieList from './MovieList.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MovieList',
  component: MovieList,
};

const Template = (args) => ({
  components: { MovieList },
  setup() {
    return { ...args }
  },
  template: '<MovieList :movieList="movieList"/>',
});
export const Primary = Template.bind({});
Primary.args = {
 movieList:[{
  id:"11",
  title:"PULP FICTION",
  rate:"4.3",
  type:"ACTION",
  description:"HFJHGJKGJTKHOPTKHPO",
  duration:"150MIN",
  coverUrl:"https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
  releaseYear:"2013",
 },
 {
  id:"11",
  title:"PULP FICTION",
  rate:"4.3",
  type:"ACTION",
  description:"HFJHGJKGJTKHOPTKHPO",
  duration:"150MIN",
  coverUrl:"https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
  releaseYear:"2013",
 },
 {
  id:"11",
  title:"PULP FICTION",
  rate:"4.3",
  type:"ACTION",
  description:"HFJHGJKGJTKHOPTKHPO",
  duration:"150MIN",
  coverUrl:"https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
  releaseYear:"2013",
 },
 {
  id:"11",
  title:"PULP FICTION",
  rate:"4.3",
  type:"ACTION",
  description:"HFJHGJKGJTKHOPTKHPO",
  duration:"150MIN",
  coverUrl:"https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
  releaseYear:"2013",
 },{
  id:"11",
  title:"PULP FICTION",
  rate:"4.3",
  type:"ACTION",
  description:"HFJHGJKGJTKHOPTKHPO",
  duration:"150MIN",
  coverUrl:"https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
  releaseYear:"2013",
 },
 {
  id:"11",
  title:"PULP FICTION",
  rate:"4.3",
  type:"ACTION",
  description:"HFJHGJKGJTKHOPTKHPO",
  duration:"150MIN",
  coverUrl:"https://flxt.tmsimg.com/assets/p25765_p_v12_aj.jpg",
  releaseYear:"2013",
 }]
};
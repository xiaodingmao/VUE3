// Button.stories.js

import Button from './SwitchButton.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SwitchButton',
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { ...args };
  },
  template: '<Button :nameTags="nameTags"/>',
});
export const Primary = Template.bind({});
Primary.args = {
  nameTags: ['TITLE', 'GANGER'],
};

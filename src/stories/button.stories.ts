import { Story, Meta,moduleMetadata } from '@storybook/angular';
import { ButtonsComponent }  from '../../projects/ga-components/src/lib/components/buttons/buttons.component';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Buttons',
  component: ButtonsComponent,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonsComponent> = (args: ButtonsComponent) => ({
  component: ButtonsComponent,
  props: args,
});

export const Active_Button = Template.bind({});
Active_Button.args = {
  /*👇 The args you need here will depend on your component */
  title:'Submit',
  style: ['custom-button-pink']
};


export const inactive_Button = Template.bind({});
inactive_Button.args = {
  /*👇 The args you need here will depend on your component */
  title:'Delete',
  style: ['custom-button-pink']
};

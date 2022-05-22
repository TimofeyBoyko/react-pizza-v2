import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavigationButton from ".";

export default {
  title: "Components/NavigationButton",
  component: NavigationButton,
} as ComponentMeta<typeof NavigationButton>;

const Template: ComponentStory<typeof NavigationButton> = (args) => (
  <NavigationButton {...args} />
);

export const Default = Template.bind({});

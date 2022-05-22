import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectionButton from ".";

export default {
  title: "Components/SelectionButton",
  component: SelectionButton,
} as ComponentMeta<typeof SelectionButton>;

const Template: ComponentStory<typeof SelectionButton> = (args) => (
  <SelectionButton {...args} />
);

export const Default = Template.bind({});

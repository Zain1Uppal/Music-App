import React from "react";
import { LikesCount } from ".";

export default {
    title: "Components/LikesCount",
    component: LikesCount
}

const Template = (args) => <LikesCount {...args} />

export const Default = Template.bind({});
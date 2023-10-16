import type { Meta, StoryObj } from '@storybook/react';

import { SearchBox } from './SearchBox';
// import { userEvent, within } from '@storybook/testing-library';

const meta = {
    title: 'Components/SearchBox',
    component: SearchBox,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
    args: {},
    // play: async ({ canvasElement }) => {
    //     const canvas = within(canvasElement);
    //     const loginButton = await canvas.getByRole('button', {
    //         name: /close/i,
    //     });
    //     await userEvent.click(loginButton);
    // },
};

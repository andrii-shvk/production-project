import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorPage } from './ErrorPage';

const meta = {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
//   args: { onClick: fn() },
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
  args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
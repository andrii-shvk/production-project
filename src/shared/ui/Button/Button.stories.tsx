import 'app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text'
  },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  },
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  },
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
  },
};
BackgroundTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  },
};
BackgroundInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  },
};
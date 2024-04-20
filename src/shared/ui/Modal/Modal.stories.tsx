import 'app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
//   args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officia nam aspernatur dolore itaque, enim fuga libero repellendus asperiores quibusdam. Quasi nobis modi ducimus maiores cumque, iure maxime ex eum?'
  },
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officia nam aspernatur dolore itaque, enim fuga libero repellendus asperiores quibusdam. Quasi nobis modi ducimus maiores cumque, iure maxime ex eum?'
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

import type { Meta, StoryObj } from '@storybook/react';
import TestComponent from '.';

type Story = StoryObj<typeof TestComponent>;

const meta: Meta<typeof TestComponent> = {
  component: TestComponent,
  tags: ['autodocs'],
};

export default meta;

export const Default: Story = {};

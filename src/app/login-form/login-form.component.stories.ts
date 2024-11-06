import type { Meta, StoryObj } from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';
import { action } from '@storybook/addon-actions';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { fn } from '@storybook/test';

const meta: Meta<LoginFormComponent> = {
  component: LoginFormComponent,
  title: 'Login Form',
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light-theme', 'dark-theme'],
      description: 'Theme of the form (light or dark)',
    },
    showPasswordStrength: {
      control: 'boolean',
      description: 'Show password strength indicator',
    },
  },
};
export default meta;

type Story = StoryObj<LoginFormComponent>;

// Default Story
export const Default: Story = {
  args: {
    theme: 'light-theme',
    showPasswordStrength: false,
    onSubmit: fn(),
  },
};

// Dark Theme Story
export const DarkTheme: Story = {
  args: {
    ...Default.args,
    theme: "dark-theme",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/login-form works!/gi)).toBeTruthy();
  },
};

// With Password Strength Indicator
export const WithPasswordStrength: Story = {
  args: {
    ...Default.args,
    showPasswordStrength: true,
  }
};

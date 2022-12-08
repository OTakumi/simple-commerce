import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './index'

export default {
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'Button variant',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      description: 'Button text',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabled flag',
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      description: 'width',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'height',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClick event handler',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// primary button
export const Primary = Template.bind({})
Primary.args = { variant: 'primary', children: 'Primary Button' }

// secondary button
export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', children: 'Secondary Button' }

// disabled button
export const Disabled = Template.bind({})
Disabled.args = { variant: true, children: 'Disabled Button' }

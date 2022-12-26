import { ComponentMeta, composeStory } from '@storybook/react'
import Text from './index'

export default {
  title: 'Atoms/Text',
  argTypes: {
    variant: {
      optins: [
        'extraSmall',
        'small',
        'medium',
        'mediumLarge',
        'large',
        'extraLarge',
      ],
      control: { type: 'select' },
      defaultValue: 'medium',
      table: {
        type: {
          summary: 'extraSmall, small, medium, mediumLarge, large, extraLarge',
        },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Text',
      tabel: {
        type: { sumarry: 'string' },
      },
    },
    fontWeight: {
      control: { type: 'text' },
      description: 'font weight',
      table: {
        type: { summary: 'string' },
      },
    },
    lineHeight: {
      control: { type: 'text' },
      description: 'line height',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'color' },
      description: 'text color',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'background color',
      table: {
        type: { summary: 'string' },
      },
    },
    m: {
      control: { type: 'number' },
      description: 'margin',
      table: {
        type: { summary: 'number' },
      },
    },
    mt: {
      control: { type: 'number' },
      description: 'margin top',
      table: {
        type: { summary: 'number' },
      },
    },
    ml: {
      control: { type: 'number' },
      describe: 'margin left',
      table: {
        type: { summary: 'number' },
      },
    },
    mb: {
      control: { type: 'number' },
      description: 'margin bottom',
      table: {
        type: { summary: 'number' },
      },
    },
    mr: {
      control: { type: 'number' },
      description: 'margin right',
      table: {
        type: { summary: 'number' },
      },
    },
    p: {
      control: { type: 'number' },
      description: 'padding',
      table: {
        type: { summary: 'number' },
      },
    },
    pt: {
      control: { type: 'number' },
      description: 'padding top',
      table: {
        type: { summary: 'number' },
      },
    },
    pl: {
      control: { type: 'number' },
      description: 'padding left',
      table: {
        type: { summary: 'number' },
      },
    },
    pb: {
      control: { type: 'number' },
      description: 'padding bottom',
      table: {
        type: { summary: 'number' },
      },
    },
    pr: {
      control: { type: 'number' },
      description: 'padding right',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

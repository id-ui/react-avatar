import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source',
    },
    defaultSrc: {
      control: 'text',
      description: 'Default image source (fallback src)',
    },
    className: {
      control: 'text',
      description: 'Avatar className',
    },
    size: {
      control: 'text',
      description: 'Avatar size',
      defaultValue: '4rem',
      table: {
        defaultValue: { summary: '4rem' },
      },
    },
    initials: {
      control: 'text',
      description:
        'Text shown if no src or an error occurred (used if specified otherwise defaultSrc will be used)',
    },
    color: {
      control: 'text',
      description: 'Avatar backgroundColor (used with initials)',
      defaultValue: '#9552D4',
      table: {
        defaultValue: { summary: '#9552D4' },
      },
    },
  },
};

export function playground(props) {
  return <Avatar {...props} />;
}

playground.args = {
  initials: 'KK',
};

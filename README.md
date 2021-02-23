# Avatar React Component

[![NPM](https://img.shields.io/npm/v/@idui/react-avatar.svg)](https://www.npmjs.com/package/@idui/react-avatar/)
[![Size](https://img.shields.io/bundlephobia/min/@idui/react-avatar)](https://www.npmjs.com/package/@idui/react-avatar)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![LICENSE](https://img.shields.io/github/license/id-ui/react-avatar)](https://github.com/id-ui/react-avatar/blob/main/LICENSE)

- [Docs](https://id-ui.github.io/react-avatar/?path=/docs/avatar--playground)
- [Playground](https://id-ui.github.io/react-avatar/?path=/story/avatar--playground)

## Install

```bash
npm install --save @idui/react-avatar
```

```bash
yarn add @idui/react-avatar
```

### See props in [Docs](https://id-ui.github.io/react-avatar/?path=/docs/avatar--playground)

### Basic Example

```jsx
import React from 'react'
import Avatar from '@idui/react-avatar'

function Example({ user }) {
  return <Avatar 
      src={user.avatar} 
      defaultSrc="default.png"
  />
}
```

### With Initials

```jsx
import React from 'react'
import Avatar from '@idui/react-avatar'

function Example({ user }) {
  return <Avatar 
      src={user.avatar}
      initials={`${user.firstName[0]}${user.lastName[0]}`}
      color="orangered"
  />
}
```

### See more details in [storybook](https://id-ui.github.io/react-avatar/?path=/docs/avatar--playground)

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)
# Getting Started

## Installation

```js
npm i okiedesign
```

## Adding to Tailwind Config

```js
module.exports = {
  ...
  plugins: [
      require('okiedesign'),
  ],
  ...
}
```

## Color Customization

```js
const colors = require("tailwindcss/colors");

module.exports = {
  ...
  theme: {
    colors: {
      primary: colors.purple,
      success: colors.emerald,
      warning: colors.amber,
      emergency: colors.red,
    },
  },
  ...
}
```

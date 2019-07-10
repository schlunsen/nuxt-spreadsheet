# nuxt-spreadsheet

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> A nuxt module for x-data-spreadsheet

Nuxt module for [https://github.com/myliang/x-spreadsheet](https://github.com/myliang/x-spreadsheet)

## Setup

1. Add `nuxt-spreadsheet` dependency to your project

```bash
npm install nuxt-spreadsheet
```

2. Add `nuxt-spreadsheet` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    'nuxt-spreadsheet',
  ]
}
```

## Usage


Add the spreadsheet to your page
``` html
<template>
  <div>
      <spreadsheet :options="options" :data="data" :onChange="onChange" ref="spreadsheet"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spreadsheet: null,
      // If other options needed
      options: {
        ...
      },
      // Initial data for spreadsheet
      data: {
        ...
      }
    }
  },
  mounted() {
    this.spreadsheet = this.$refs.spreadsheet.spreadsheet
  },
  methods: {
    onChange: function(data) {

    }
  }

}
</script>


```

The x-data-spreadsheet spreadsheet object can be found via refs: ```this.$refs.spreadsheet.spreadsheet``` 

See [https://github.com/myliang/x-spreadsheet/blob/master/docs/index.html](https://github.com/myliang/x-spreadsheet/blob/master/docs/index.html) for data format


## Options
```javascript
// default options
{
  showToolbar: true,
  showGrid: true,
  showContextmenu: true,
  view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth,
  },
  row: {
    len: 100,
    height: 25,
  },
  col: {
    len: 26,
    width: 100,
    indexWidth: 60,
    minWidth: 60,
  },
  style: {
    bgcolor: '#ffffff',
    align: 'left',
    valign: 'middle',
    textwrap: false,
    strike: false,
    underline: false,
    color: '#0a0a0a',
    font: {
      name: 'Helvetica',
      size: 10,
      bold: false,
      italic: false,
    },
  },
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Rasmus Schlünsen

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/nuxt-spreadsheet.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-spreadsheet

[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-spreadsheet/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-spreadsheet

[circle-ci-src]: https://img.shields.io/circleci/project/github/schlunsen/nuxt-spreadsheet.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/schlunsen/nuxt-spreadsheet

[codecov-src]: https://img.shields.io/codecov/c/github/schlunsen/nuxt-spreadsheet.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/schlunsen/nuxt-spreadsheet

[david-dm-src]: https://david-dm.org/schlunsen/nuxt-spreadsheet/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/schlunsen/nuxt-spreadsheet

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

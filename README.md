# nuxt-spreadsheet

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> A nuxt module for x-data-spreadsheet

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-spreadsheet` dependency to your project

```bash
yarn add nuxt-spreadsheet # or npm install nuxt-spreadsheet
```

2. Add `nuxt-spreadsheet` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-spreadsheet',

    // With options
    ['nuxt-spreadsheet', { /* module options */ }]
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
  methods{
    onChange: function(data) {
      
    }
  }

}
</script>


```

The x-data-spreadsheet spreadsheet object can be found via refs: ```this.$refs.spreadsheet.spreadsheet``` 

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

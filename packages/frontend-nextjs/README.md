This is a starter template for [Learn Next.js](https://nextjs.org/learn).
# Add StoryBook
```bash
npx sb init

To run your Storybook, type:

   npm run storybook 

For more information visit: https://storybook.js.org
```

## Enable sass support

https://github.com/storybookjs/presets/tree/master/packages/preset-scss#basic-usage

Basic usage

```bash
npm i -D @storybook/preset-scss css-loader sass sass-loader style-loader

+ sass-loader@12.1.0
+ css-loader@6.2.0
+ style-loader@3.2.1
+ sass@1.36.0
+ @storybook/preset-scss@1.0.3
```
Then add the following to .storybook/main.js:

```js
module.exports = {
  addons: ['@storybook/preset-scss'],
};
```
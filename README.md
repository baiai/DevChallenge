# DevChallenge
devChallenge: https://devchallenges.io/

## TagList
1. initProject 是项目初始化的一些基础配置。包括了打包、devServer、eslint规则。同时安装了react、react-dom。

## TodoList
1. react、react-dom、mobx等第三方库分开打包
  为了提高打包效率，同时第三方库一般不会轻易改动，可以利用浏览器的缓存，减少页面加载时的体积。
2. 每个challenge可以考虑做成动态加载
  首页加载的时候，各个challenge的代码没有必要加载。等点击进去之后再加载也不迟。做成懒加载可以避免随着challenge增多，代码体积的增大。
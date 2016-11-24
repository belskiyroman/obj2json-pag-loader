// obj2jsonPag-loader
module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;
  return "module.exports = " + ('\n' + JSON.stringify(content, null, '\t')).split('\n').join('\n|');
}
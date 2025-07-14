/** @format */

var template = '{{nnnn}}很厉害，才{{age}}岁'
var context = { nnnn: 'bottle', age: '15' }

const render = (template, context) => {
  const reg = '/{{(.*?)}}/g'
  return template.replace(reg, (item, $1) => {
    return context[$1]
  })
}

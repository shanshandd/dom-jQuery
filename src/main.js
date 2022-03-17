// let a = jQuery('#test').find('.blue').addClass('red')
// console.log(document.getElementsByTagName('li')[0].querySelectorAll('.blue'))

// let a = [['aa'], ['bb']];
// let arr = [];
// // arr.push(a);

jQuery('#test').find('.blue').addClass('red').end().find('.green').print()

jQuery('.blue').parent().addClass('ttt').end().addClass('fff')
jQuery('#test').children().print()
console.log(jQuery('#test').index('.blue'));
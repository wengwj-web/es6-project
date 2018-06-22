{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=', arr)

  let empty = Array.of()
  console.log('empty',empty);
}

{
  let p = document.querySelectorAll('p')
  let pArr = Array.from(p)  //转为数组对象
  pArr.forEach(item => {
    console.log(item.textContent)
  })

  console.log(Array.from([1,3,5],item => {
    return item*2
  }))
}

{
  console.log('fill-7',[1,'a',undefined].fill(7)); //把每个元素变为一致
  console.log('fill,pos',['a','b','c'].fill(7,1,3)); //从第一个开始换到第三个
}

{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys', index);
  }
  for(let value of ['1','c','ks'].values()){
    console.log('values', value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index, value);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4));//   0位置替换为3位置的值 在4之前覆盖0位置的值
}

{
  console.log([1,2,3,4,5,6].find(item => {
    return item > 3
  })); //返回value

  console.log([1,2,3,4,5,6].findIndex(item => {
    return item > 3
  })); //返回index
}

{
  console.log('number', [1,2,NaN].includes(1));
  console.log('number', [1,2,NaN].includes(NaN));
}
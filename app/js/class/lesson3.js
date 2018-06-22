{
  let regex = new RegExp('xyz','i');
  let regex2 = new RegExp(/xyz/i);

  console.log(regex.test('xyz123'),regex2.test('xyz123'));
  let regex3 = new RegExp(/xyz/ig,'i');
  console.log(regex3.flags)
}

{
  let s = 'bbb_bb_b';
  let a1 = /b+/g; //全局匹配 - 前一个位置匹配位置下一个继续匹配
  let a2 = /b+/y; //全局匹配 - 下一个匹配必须和第一个匹配的相同
  console.log('one',a1.exec(s),a2.exec(s))
  console.log('two',a1.exec(s),a2.exec(s))

  console.log(a1.sticky,a2.sticky)
}

{
  console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); // 没有u  匹配了两个字符
  console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A')); // 加了u 只能匹配一个字符

  console.log(/\u{61}/.test('a')); // 大括号代表修饰一个字符  没有u就是fasle
  console.log(/\u{61}/u.test('a')); // 有u true

  console.log(`\u{20BB7}`)

  let s = '𠮷';

  // 如果字符大于两个字节 必须加u修饰才可以识别
  console.log('u',/^.$/.test(s)); // 点可以匹配的观点出错，必须小于两个字符才可以匹配到
  console.log('u-2',/^.$/u.test(s));

  console.log('test',/𠮷{2}/.test('𠮷𠮷'));
  console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));

}
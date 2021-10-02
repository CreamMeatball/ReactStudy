import React from 'react';

function Hello({color, name, isSpecial}) {
    const style2 = {
        color: 'green'
    }
  return <div 
  style={{ color }}
  //원래 style={내용} 이렇게 써야되는데 안에 props 값 {}을 쓰니까 {{}}로 되는 듯
  //style={style2}
  >
    {/* { isSpecial ? <b>*</b> : null }   */}
    {isSpecial && <b>*</b>}
    안녕하세요 {name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;
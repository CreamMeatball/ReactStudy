import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css'

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontsize: 24,
    padding: '1rem'
  }
  return (
    <Wrapper>
    {/* fragment */}
      <Hello 
        // 열리는 태그 내에서는 이렇게 주석 작성이 된답니다.
      name="react" color="red" isSpecial={true}
      // isSpecial 이렇게만 적었으면 default값은 true로 받아들임.
      />
      <Hello 
      color="red"/>
      <div>안녕히 계세요</div>
      <div style={style}>
        <div>내부_1</div>
        <div>내부_2</div>
      </div>
      <div className="gray-box">{name}</div>
      <br />
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;

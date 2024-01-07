import './App.css';

// 컴포넌트의 첫 글자는 항상 대문자로 정의되어야 한다.
function Header(props) {
  // props에는 객체가 들어온다. 
  // console.log("props", props, props.title); 
  // 이 코드는 html이 아닌 유사 html코드 이므로 주의하도록 하자. 
  // 중괄호 내부에 있는 정보는 문자열이 아니라 표현식으로 취급된다. 
  // onClick에 들어간 콜백 함수가 호출될 때 event객체를 첫번째 인자로 넣어준다. 
  return ( 
    <header>
      {/* function(event) {} 라고 적는 것과 똑같다. */}
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {
  const lis = []
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    // 리액트에서 자동으로 생성한 태그의 경우에는 태그들을 추적해야 하므로 key라고 하는 약속된 prop을 부여해야한다.
    lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(event)=>{
      event.preventDefault();
      // target은 event를 유발시킨 tag를 가르킨다.
      props.onChangeMode(event.target.id);
    }}>{t.title}</a></li>)
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

// 리액트에서는 사용자 정의 태그라는 말 대신 컴포넌트라는 말을 사용한다.
function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ]
  return (
    <div>
      {/* 컴포넌트를 사용할 때에는 태그 형태로 사용한다. */}
      {/* 컴포넌트의 속성을 prop이라고 부른다. */}
      {/* function() {} 라고 적는 것과 똑같다. */}
      <Header title="WEB" onChangeMode={()=>{
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        alert(_id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

// 컴포넌트의 첫 글자는 항상 대문자로 정의되어야 한다.
function Header(props) {
  /* props에는 객체가 들어온다. */
  // console.log("props", props, props.title);
  return (
    <header>
      {/* 중괄호 내부에있는 정보는 문자열이 아니라 표현식으로 취급된다. */}
      <h1><a href="/">{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {
  const lis = []
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    {/* 리액트에서 자동으로 생성한 태그의 경우에는 태그들을 추적해야 하므로 key라고 하는 약속된 prop을 부여해야한다. */}
    lis.push(<li><a key={t.id} href={'/read/' + t.id}>{t.title}</a></li>)
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
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;

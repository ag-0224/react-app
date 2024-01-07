import logo from './logo.svg';
import './App.css';

// 컴포넌트의 첫 글자는 항상 대문자로 정의되어야 한다.
function Header() {
  return (
    <header>
      <h1><a href="/">React</a></h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

// 리액트에서는 사용자 정의 태그라는 말 대신 컴포넌트라는 말을 사용한다.
function App() {
  return (
    <div>
      {/* 컴포넌트를 사용할 때에는 태그 형태로 사용한다. */}
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;

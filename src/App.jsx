import { Header } from "./components/header";
import { Post } from "./Post";
import "./styles.css";


export function App () {
 return (
   <div>
    <Header />
    <Post
      author='Bia M'
      content='1, 2,3 indiozinhos'
    />
    <Post
      author='B. M.'
      content='pastel de churros'
    />

   </div>
  )
}


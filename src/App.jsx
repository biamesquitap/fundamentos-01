import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"
import "./global.css";

export function App () {
 return (
   <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author='Bia M'
          content='1, 2,3 indiozinhos'
        />
        <Post
          author='B. M.'
          content='pastel de churros'
        />
      </main>
    </div>
   </div>
  )
}


import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"
import "./global.css";

// author: { avatar_Url:" " , name:"", role: ""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl:'https://github.com/biamesquitap.png',
      name:  'Beatriz Mesquita',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2022-07-18 17:00:00')
  },
  {
    id: 2, 
    author: {
      avatarUrl:'https://github.com/bielpatricio.png',
      name:  'Gabriel Patricio',
      role: 'Dev Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2022-07-18 10:44:21')
  }
]

export function App () {
 return (
   <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ) 
        })}
      </main>
    </div>
   </div>
  )
}


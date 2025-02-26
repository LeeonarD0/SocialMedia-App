import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'

import styles from './app.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LeeonarD0.png",
      name: 'Leonardo Basso',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello Guys 👋' },
      { type: 'paragraph', content: 'I just uploaded another project to my portfolio. It`s a project I completed during my studies. The project is called DoctorCare🚀' },
      { type: 'link', content: 'leo.design/doctorcare' }
    ],
    publishedAt: new Date('2025-02-01 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/LeeonarD0.png",
      name: 'Adrieli Basso',
      role: 'Backend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello Guys 👋' },
      { type: 'paragraph', content: 'I just uploaded another project to my portfolio. It`s a project I completed during my studies. The project is called DoctorCare🚀' },
      { type: 'link', content: 'leo.design/doctorcare' }
    ],
    publishedAt: new Date('2025-01-31 20:00:00')
  }
]

export function App() {
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
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
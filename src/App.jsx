import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Jessé Silva"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A saepe ex, sunt aliquid, odit molestiae nesciunt quam atque tempore voluptas laborum eligendi culpa. Possimus dignissimos praesentium quis vero et omnis."
          />

          <Post
            author="Manuela Valente"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A saepe ex, sunt aliquid, odit molestiae nesciunt quam atque tempore voluptas laborum eligendi culpa. Possimus dignissimos praesentium quis vero et omnis."
          />
        </main>
      </div>
    </div>
  );
}

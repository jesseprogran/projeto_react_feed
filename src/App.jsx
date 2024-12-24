import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Jessé Silva"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque repellendus non, eaque quis voluptas architecto quos excepturi eius? Alias pariatur error commodi hic nemo, ad animi necessitatibus nam numquam."
      />

      <Post
        author="Manuela Valente"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque repellendus non, eaque quis voluptas architecto quos excepturi eius? Alias pariatur error commodi hic nemo, ad animi necessitatibus nam numquam."
      />
    </div>
  );
}

import { useState } from "react";

// user component (declaration)

export function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  return (
    // camelCase
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

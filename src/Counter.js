import { useState } from "react";

// user component (declaration)

export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDislike] = useState(0);

  const likeStyle={
    color:like>= 10 ? "green" : "blue"
  }

  const disLikeStyle={
    color:disLike>= 10 ? "red" : "blue"
  }
  return (
    // camelCase
    <div>
      <button style={likeStyle} onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button style={disLikeStyle} onClick={() => setDislike(disLike + 1)}>👎 {disLike}</button>
    </div>
  );
}

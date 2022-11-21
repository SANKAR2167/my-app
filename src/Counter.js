import { useState } from "react";

// user component (declaration)

export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDislike] = useState(0);

  // conditional styling
  const likeStyle={
    color:like>= 10 ? "green" : "blue"
  }

  const disLikeStyle={
    color:disLike>= 10 ? "red" : "blue"
  }
  return (
    // camelCase
    <div>

      {/* conditional rendering */}

      {like - disLike >= 10 ? <h3>You are Awesome</h3> : null}
      <button style={likeStyle} onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button style={disLikeStyle} onClick={() => setDislike(disLike + 1)}>👎 {disLike}</button>
    </div>
  );
}

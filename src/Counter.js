import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
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
      <IconButton aria-label="like" onClick={() => setLike(like + 1)} color='primary'>
      👍 {like}
      </IconButton>

      <IconButton aria-label="like" onClick={() => setDislike(disLike + 1)} color='error'>
      👍 {disLike}
      </IconButton>

      {/* <button style={likeStyle} onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button style={disLikeStyle} onClick={() => setDislike(disLike + 1)}>👎 {disLike}</button> */}
    </div>
  );
}

import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
// user component (declaration)

export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDislike] = useState(0);
  return (
    // camelCase
    <div>
      <IconButton aria-label="like" onClick={() => setLike(like + 1)} color='primary'>
      👍 {like}
      </IconButton>

      <IconButton aria-label="like" onClick={() => setDislike(disLike + 1)} color='error'>
      👎 {disLike}
      </IconButton>
    </div>
  );
}

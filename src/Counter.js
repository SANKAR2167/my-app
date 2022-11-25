import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

// user component (declaration)

export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDislike] = useState(0);
  return (
    // camelCase
    <div>
      <IconButton aria-label="like" onClick={() => setLike(like + 1)} color='primary'>
      <Badge badgeContent={like} color="primary">
      👍
      </Badge>
      </IconButton>
      
      <IconButton aria-label="dislike" onClick={() => setDislike(disLike + 1)} color='error'>
      <Badge badgeContent={disLike} color="error">
      👎
      </Badge>
      </IconButton>
    </div>
  );
}

import { Box } from "@mui/material";
import { Post } from "../post";

export function Feed() {
  return (
    <Box flex={4} p={2}>
      {Array(10)
        .fill(1)
        .map((item, index) => {
          return <Post key={index} />;
        })}
    </Box>
  );
}

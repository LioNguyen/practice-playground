import { Box, Stack } from "@mui/material";
import { Feed, RightBar, SideBar } from "./components";

function Page1() {
  return (
    <Box>
      {/* navbar */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default Page1;

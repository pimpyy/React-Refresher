import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";

export default function AuthForm() {
  const [tab, setTab] = useState(0);

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 8 }}>
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
        <Tab label="Login" />
        <Tab label="Signup" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" gutterBottom>
          {tab === 0 ? "Login" : "Signup"}
        </Typography>

        <TextField fullWidth label="Email" margin="normal" />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        {tab === 1 && (
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
          />
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {tab === 0 ? "Login" : "Signup"}
        </Button>
      </Box>
    </Paper>
  );
}

import { useState, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  Switch
} from '@mui/material';

function NotificationsTab() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
    checkedD: false
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Box
          sx={{
            pb: 2
          }}
        >
          <Typography variant="h3">Account</Typography>
          <Typography variant="subtitle2">
            Choose what notifications you want to receive
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Widthdraw Activity"
                secondary="Receive an email when a widthdrawal is made"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <Switch
                color="primary"
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Weekly Report"
                secondary="Receive account status weekly report in your inbox"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <Switch
                color="primary"
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid size={12}>
        <Box
          sx={{
            pb: 2
          }}
        >
          <Typography variant="h3">Orders</Typography>
          <Typography variant="subtitle2">
            Receive email notifications related to your orders activity
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Failed Payment"
                secondary="Get a message when a payment fails"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <Switch
                color="primary"
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Order Status Update"
                secondary="Whenever an order is updated, get a notification on your phone"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <Switch
                color="primary"
                checked={state.checkedD}
                onChange={handleChange}
                name="checkedD"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export default NotificationsTab;

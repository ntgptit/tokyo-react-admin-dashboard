import { useState, MouseEvent, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  Button,
  ListItemAvatar,
  Avatar,
  Switch,
  CardHeader,
  Tooltip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  useTheme,
  styled
} from '@mui/material';

import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { format, subHours, subWeeks, subDays } from 'date-fns';

const ButtonError = styled(Button)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

function SecurityTab() {
  const theme = useTheme();

  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const logs = [
    {
      id: 1,
      browser: ' Safari/537.36',
      ipaddress: '3.70.73.142',
      location: 'United States',
      date: subDays(new Date(), 2).getTime()
    },
    {
      id: 2,
      browser: 'Chrome/36.0.1985.67',
      ipaddress: '138.13.136.179',
      location: 'China',
      date: subDays(new Date(), 6).getTime()
    },
    {
      id: 3,
      browser: 'Googlebot/2.1',
      ipaddress: '119.229.170.253',
      location: 'China',
      date: subHours(new Date(), 15).getTime()
    },
    {
      id: 4,
      browser: 'AppleWebKit/535.1',
      ipaddress: '206.8.99.49',
      location: 'Philippines',
      date: subDays(new Date(), 4).getTime()
    },
    {
      id: 5,
      browser: 'Mozilla/5.0',
      ipaddress: '235.40.59.85',
      location: 'China',
      date: subWeeks(new Date(), 3).getTime()
    }
  ];

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Box
          sx={{
            pb: 2
          }}
        >
          <Typography variant="h3">Social Accounts</Typography>
          <Typography variant="subtitle2">
            Manage connected social accounts options
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemAvatar sx={{ pr: 2 }}>
                <AvatarWrapper src="/static/images/logo/google.svg" />
              </ListItemAvatar>
              <ListItemText
                primary="Google"
                secondary="A Google account hasn’t been yet added to your account"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <Button color="secondary" size="large" variant="contained">
                Connect
              </Button>
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemAvatar sx={{ pr: 2 }}>
                <AvatarSuccess>
                  <DoneTwoToneIcon />
                </AvatarSuccess>
              </ListItemAvatar>
              <ListItemText
                primary="Facebook"
                secondary="Your Facebook account has been successfully connected"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <ButtonError size="large" variant="contained">
                Revoke access
              </ButtonError>
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemAvatar sx={{ pr: 2 }}>
                <AvatarSuccess>
                  <DoneTwoToneIcon />
                </AvatarSuccess>
              </ListItemAvatar>
              <ListItemText
                primary="Twitter"
                secondary="Your Twitter account was last syncronized 6 days ago"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <ButtonError size="large" variant="contained">
                Revoke access
              </ButtonError>
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
          <Typography variant="h3">Security</Typography>
          <Typography variant="subtitle2">
            Change your security preferences below
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Change Password"
                secondary="You can change your password here"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <Button size="large" variant="outlined">
                Change password
              </Button>
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primary="Two-Factor Authentication"
                secondary="Enable PIN verification for all sign in attempts"
                slotProps={{
                  primary: { variant: 'h5', gutterBottom: true },

                  secondary: {
                    variant: 'subtitle2',
                    sx: { lineHeight: 1 }
                  }
                }}
              />
              <Switch color="primary" />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card>
          <CardHeader
            title="Access Logs"
            subheader="Recent sign in activity logs"
            slotProps={{
              title: {},
              subheader: {}
            }}
          />
          <Divider />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Browser</TableCell>
                  <TableCell>IP Address</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Date/Time</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.id} hover>
                    <TableCell>{log.browser}</TableCell>
                    <TableCell>{log.ipaddress}</TableCell>
                    <TableCell>{log.location}</TableCell>
                    <TableCell>
                      {format(log.date, 'dd MMMM, yyyy - h:mm:ss a')}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip placement="top" title="Delete" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.error.lighter
                            },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              p: 2
            }}
          >
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SecurityTab;

import {
  Typography,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListSubheader,
  ListItemText,
  Avatar,
  useTheme,
  styled
} from '@mui/material';

const ListWrapper = styled(List)(
  () => `
      .MuiListItemButton-root {
        border-radius: 0;
        margin: 0;
      }
`
);

function PopularTags() {
  const theme = useTheme();

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Popular Tags" />
      <Divider />
      <ListWrapper disablePadding>
        <ListItemButton
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` }
          }}
        >
          <ListItemText primary="#HTML" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` }
          }}
        >
          <ListItemText primary="#software_development" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` }
          }}
        >
          <ListItemText primary="#TrendingInfuencers" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          sx={{
            color: `${theme.colors.primary.main}`,
            '&:hover': { color: `${theme.colors.primary.dark}` }
          }}
        >
          <ListItemText primary="#investorsWatch2022" />
        </ListItemButton>
        <Divider />
        <ListSubheader>
          <Typography
            variant="h4"
            sx={{
              color: 'text.primary',
              py: 1.5
            }}
          >
            Groups
          </Typography>
        </ListSubheader>
        <Divider />
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.info.contrastText}`
              }}
            >
              WD
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Web Designers Lounge"
            slotProps={{
              primary: {
                variant: 'h5',
                color: `${theme.colors.alpha.black[100]}`
              }
            }}
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.alpha.black[100]}`,
                color: `${theme.colors.alpha.white[100]}`
              }}
            >
              D
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Writer’s Digest Daily"
            slotProps={{
              primary: {
                variant: 'h5',
                color: `${theme.colors.alpha.black[100]}`
              }
            }}
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              sx={{ width: 38, height: 38 }}
              src="/static/images/logo/google.svg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Google Developers"
            slotProps={{
              primary: {
                variant: 'h5',
                color: `${theme.colors.alpha.black[100]}`
              }
            }}
          />
        </ListItemButton>
      </ListWrapper>
    </Card>
  );
}

export default PopularTags;

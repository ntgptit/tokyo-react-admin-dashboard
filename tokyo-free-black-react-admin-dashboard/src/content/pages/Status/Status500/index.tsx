import { useState } from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  Button,
  Grid,
  styled
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';

const GridWrapper = styled(Grid)(
  ({ theme }) => `
    background: ${theme.colors.gradients.black1};
`
);

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[100]};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);

function Status500() {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('lg'));
  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
  }

  return (
    <>
      <Helmet>
        <title>Status - 500</title>
      </Helmet>
      <MainContent>
        <Grid
          container
          spacing={0}
          sx={{
            alignItems: 'stretch',
            height: '100%'
          }}
        >
          <Grid
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
            size={{
              xs: 12,
              md: 6
            }}
          >
            <Container maxWidth="sm">
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <img
                  alt="500"
                  height={260}
                  src="/static/images/status/500.svg"
                />
                <Typography variant="h2" sx={{ my: 2 }}>
                  There was an error, please try again later
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 'normal',
                    mb: 4
                  }}
                >
                  The server encountered an internal error and was not able to
                  complete your request
                </Typography>
                <Button
                  onClick={handleClick}
                  loading={pending}
                  variant="outlined"
                  color="primary"
                  startIcon={<RefreshTwoToneIcon />}
                >
                  Refresh view
                </Button>
                <Button href="/overview" variant="contained" sx={{ ml: 1 }}>
                  Go back
                </Button>
              </Box>
            </Container>
          </Grid>
          {!isMdDown && (
            <>
              <GridWrapper
                size={{ xs: 12, md: 6 }}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Container maxWidth="sm">
                  <Box
                    sx={{
                      textAlign: 'center'
                    }}
                  >
                    <TypographyPrimary variant="h1" sx={{ my: 2 }}>
                      Tokyo Free Black React Typescript Admin Dashboard
                    </TypographyPrimary>
                    <TypographySecondary
                      variant="h4"
                      sx={{ fontWeight: 'normal', mb: 4 }}
                    >
                      High performance React template built with lots of
                      powerful Material-UI components across multiple product
                      niches for fast &amp; perfect apps development processes.
                    </TypographySecondary>
                    <Button href="/overview" size="large" variant="contained">
                      Overview
                    </Button>
                  </Box>
                </Container>
              </GridWrapper>
            </>
          )}
        </Grid>
      </MainContent>
    </>
  );
}

export default Status500;

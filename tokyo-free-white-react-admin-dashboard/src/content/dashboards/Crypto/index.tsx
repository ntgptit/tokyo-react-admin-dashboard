import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';

function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          spacing={4}
          sx={{
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          <Grid size={12}>
            <AccountBalance />
          </Grid>
          <Grid
            size={{
              lg: 8,
              xs: 12
            }}
          >
            <Wallets />
          </Grid>
          <Grid
            size={{
              lg: 4,
              xs: 12
            }}
          >
            <AccountSecurity />
          </Grid>
          <Grid size={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;

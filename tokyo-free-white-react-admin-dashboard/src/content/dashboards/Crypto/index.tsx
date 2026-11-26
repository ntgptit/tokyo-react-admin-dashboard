import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
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
      <div className="mx-auto w-full max-w-[1280px] px-[18px] sm:px-[24px]">
        <div className="grid grid-cols-12 items-stretch gap-9">
          <div className="col-span-12">
            <AccountBalance />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Wallets />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <AccountSecurity />
          </div>
          <div className="col-span-12">
            <WatchList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardCrypto;

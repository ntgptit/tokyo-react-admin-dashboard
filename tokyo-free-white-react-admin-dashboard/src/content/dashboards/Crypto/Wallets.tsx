import { Plus } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { Card, CardContent } from 'src/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from 'src/components/ui/tooltip';
import CoinAvatar from './CoinAvatar';

const wallets = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'bitcoin',
    value: '$3,586.22',
    amount: '1.25843 BTC'
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    logo: 'ripple',
    value: '$586.83',
    amount: '5,783 XRP'
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    logo: 'cardano',
    value: '$54,985.00',
    amount: '34,985 ADA'
  }
];

function Wallets() {
  return (
    <>
      <div className="flex items-center justify-between pb-[27px]">
        <h3 className="text-h3">Wallets</h3>
        <Button
          variant="outline"
          className="h-auto gap-[8px] rounded-md border-primary/50 bg-transparent px-[10px] py-[3px] text-[13px] leading-[1.7] font-bold text-primary shadow-none hover:bg-primary/5 hover:text-primary"
        >
          <Plus className="size-5" />
          Add new wallet
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6.75 sm:grid-cols-2 md:grid-cols-4">
        {wallets.map((w) => (
          <Card
            key={w.symbol}
            className="gap-0 rounded-[10px] border-0 px-[9px] py-0 shadow-card"
          >
            <CardContent className="p-[16px] pb-[24px]">
              <CoinAvatar
                className="mt-[18px] mb-[9px] -ml-[4.5px]"
                alt={w.symbol}
                src={`/static/images/placeholders/logo/${w.logo}.png`}
              />
              <h5 className="text-h5 truncate">{w.name}</h5>
              <p className="text-subtitle1 truncate">{w.symbol}</p>
              <div className="pt-[27px]">
                <h3 className="text-h3 mb-[0.35em] truncate">{w.value}</h3>
                <p className="text-subtitle2 truncate">{w.amount}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        <Tooltip>
          <TooltipTrigger asChild>
            <Card className="h-full gap-0 rounded-[10px] border border-dashed border-primary bg-card py-0 text-primary shadow-card transition-all hover:border-ink/70">
              <button
                type="button"
                className="flex h-full w-full cursor-pointer items-center justify-center px-[9px] outline-none hover:bg-primary/5"
              >
                <CardContent className="p-[16px] pb-[24px]">
                  <span className="flex size-[72px] items-center justify-center rounded-full bg-ink/10 text-primary">
                    <Plus className="size-[35px]" />
                  </span>
                </CardContent>
              </button>
            </Card>
          </TooltipTrigger>
          <TooltipContent side="top">Click to add a new wallet</TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}

export default Wallets;

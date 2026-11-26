import { cn } from 'src/lib/utils';

interface CoinAvatarProps {
  src: string;
  alt: string;
  className?: string;
}

function CoinAvatar({ src, alt, className }: CoinAvatarProps) {
  return (
    <span
      className={cn(
        'mr-[9px] flex size-[49.5px] shrink-0 items-center justify-center overflow-hidden rounded-[60px] bg-ink/7 p-[4.5px]',
        className
      )}
    >
      <img
        alt={alt}
        src={src}
        className="block size-[40.5px] rounded-[inherit] bg-white p-[4.5px]"
      />
    </span>
  );
}

export default CoinAvatar;

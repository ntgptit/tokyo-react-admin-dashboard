import { Avatar, AvatarImage } from 'src/components/ui/avatar';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <div className="flex items-center">
      <Avatar className="mr-[18px] size-[72px] rounded-[10px]">
        <AvatarImage alt={user.name} src={user.avatar} />
      </Avatar>
      <div>
        <h3 className="text-h3 mb-[0.35em]">Welcome, {user.name}!</h3>
        <p className="text-subtitle2">
          Today is a good day to start trading crypto assets!
        </p>
      </div>
    </div>
  );
}

export default PageHeader;

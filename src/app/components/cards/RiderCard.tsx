import { Member } from '@/queries/fetchMembers';
import StaticWindow from '../window/StaticWindow';
import Image from 'next/image';
import { useScreen } from '@/app/context/ScreenContext';

const RiderCard = ({
  rider,
  onClose,
}: {
  rider: Member;
  onClose?: () => void;
}) => {
  const { isMobile } = useScreen();
  const { firstName, lastName, role, description, id } = rider;

  const styleObject: React.CSSProperties = isMobile
    ? { zIndex: 1000, position: 'relative' }
    : {
        position: 'absolute',
        left: '60%',
        top: '20%',
        width: '350px',
        maxHeight: '600px',
        zIndex: 1000,
      };

  return (
    <StaticWindow
      header={role}
      style={styleObject}
      onClose={onClose && onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '8px',
        }}
      >
        <span style={{ fontSize: 'large' }}>
          {firstName} {lastName}
        </span>
        <Image
          src={`/riders/${firstName.toLocaleLowerCase()}.png`}
          alt={firstName}
          width={200}
          height={200}
          style={{ padding: '8px' }}
          key={id}
        />
        <div
          style={{
            maxHeight: '200px',
            overflowY: 'scroll',
            fontSize: 'medium',
            lineHeight: '1.5',
          }}
        >
          {description}
        </div>
      </div>
    </StaticWindow>
  );
};

export default RiderCard;

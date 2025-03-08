import { Member } from '@/queries/fetchMembers';
import StaticWindow from '../window/StaticWindow';
import Image from 'next/image';

const RiderCard = ({
  rider,
  onClose,
}: {
  rider: Member;
  onClose: () => void;
}) => {
  const { firstName, lastName, role, description, id } = rider;
  return (
    <StaticWindow
      header={role}
      style={{
        position: 'absolute',
        left: '60%',
        top: '20%',
        width: '350px',
        maxHeight: '600px',
        zIndex: 1000,
      }}
      onClose={onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '8px',
        }}
      >
        <span>
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
        <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>
          {description}
        </div>
      </div>
    </StaticWindow>
  );
};

export default RiderCard;

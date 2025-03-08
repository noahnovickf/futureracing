import { Sponsor } from '@/queries/fetchSponsors';
import StaticWindow from '../window/StaticWindow';
import Image from 'next/image';

const SponsorCard = ({
  sponsor,
  onClose,
}: {
  sponsor: Sponsor;
  onClose: () => void;
}) => {
  const { id, name, description, imgSrc } = sponsor;

  return (
    <StaticWindow
      header={name}
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
        <span>{name}</span>
        <Image
          src={`/sponsors/${imgSrc}_S.svg`}
          alt={name}
          width={300}
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

export default SponsorCard;

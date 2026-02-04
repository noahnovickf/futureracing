import { Sponsor } from '@/queries/fetchSponsors';
import StaticWindow from '../window/StaticWindow';
import Image from 'next/image';
import { useScreen } from '@/app/context/ScreenContext';

const SponsorCard = ({
  sponsor,
  onClose,
}: {
  sponsor: Sponsor;
  onClose?: () => void;
}) => {
  const { isMobile } = useScreen();
  const { id, name, description, imgSrc, url } = sponsor;

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
      header={name}
      style={styleObject}
      onClose={onClose && onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '8px',
        }}
      >
        <span style={{ fontSize: 'large' }}>{name}</span>
        <Image
          src={`/sponsors/${imgSrc}_S.svg`}
          alt={name}
          width={300}
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
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '12px' }}
          >
            <button style={{ width: '100%' }}>Visit Website</button>
          </a>
        )}
      </div>
    </StaticWindow>
  );
};

export default SponsorCard;

'use client';
import { fetchSponsors, Sponsor } from '@/queries/fetchSponsors';
import { useEffect, useState } from 'react';
import DragWindow from '../components/window/DragWindow';
import LoadingBar from '../components/LoadingBar';

import Image from 'next/image';
import SponsorCard from '../components/cards/SponsorCard';
import IconContainer from '../IconContainer';
import { useScreen } from '../context/ScreenContext';

const Sponsors = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
  const { isMobile } = useScreen();

  useEffect(() => {
    async function getMembers() {
      setLoading(true);
      try {
        const data = await fetchSponsors();
        setSponsors(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setLoading(false);
      }
    }
    getMembers();
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          padding: '0px 32px',
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
          marginBottom: '75px',
        }}
      >
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <IconContainer />
      <DragWindow
        header="Sponsors"
        coordinates={{ x: 100, y: 100 }}
        width={600}
      >
        {loading ? (
          <LoadingBar />
        ) : (
          <div
            className="window-body"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  alignItems: 'center',
                  width: '95px',
                  overflow: 'visible',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedSponsor(sponsor)}
              >
                <Image
                  src={`/sponsors/${sponsor.imgSrc}_folder.png`}
                  alt={sponsor.name}
                  width={80}
                  height={80}
                />
                {sponsor.name}
              </div>
            ))}
          </div>
        )}
      </DragWindow>
      {selectedSponsor && (
        <SponsorCard
          sponsor={selectedSponsor}
          onClose={() => setSelectedSponsor(null)}
        />
      )}
    </div>
  );
};

export default Sponsors;

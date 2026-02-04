'use client';
import { fetchMembers, Member } from '@/queries/fetchMembers';
import DragWindow from '../components/window/DragWindow';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import RiderCard from '../components/cards/RiderCard';
import LoadingBar from '../components/LoadingBar';
import { useScreen } from '../context/ScreenContext';
import IconContainer from '../IconContainer';

const MeetTheTeam = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedRider, setSelectedRider] = useState<Member | null>(null);
  const { isMobile } = useScreen();

  useEffect(() => {
    async function getMembers() {
      setLoading(true);
      try {
        const data = await fetchMembers();
        setMembers(data);
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
        {members.map((rider) => (
          <RiderCard
            key={rider.id} // Ensure each item has a unique key
            rider={rider}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <IconContainer />
      <DragWindow
        header="Meet the Team"
        coordinates={{ x: 100, y: 100 }}
        width={695}
        height={600}
      >
        {loading ? (
          <LoadingBar />
        ) : (
          <div
            className="window-body"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {members.map((rider) => (
              <div
                key={rider.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  alignItems: 'center',
                  width: '115px',
                  overflow: 'visible',
                  cursor: 'pointer',
                  paddingBlock: '10px',
                  textAlign: 'center',
                  boxShadow:
                    'inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px gray, inset 2px 2px #fff',
                }}
                onClick={() => setSelectedRider(rider)}
              >
                <Image
                  src={`/riders/${rider.firstName.toLocaleLowerCase()}.png`}
                  alt={rider.firstName}
                  width={80}
                  height={80}
                />
                {rider.firstName} {rider.lastName}
              </div>
            ))}
          </div>
        )}
      </DragWindow>
      {selectedRider && (
        <RiderCard
          rider={selectedRider}
          onClose={() => setSelectedRider(null)}
        />
      )}
    </div>
  );
};

export default MeetTheTeam;

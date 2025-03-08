'use client';
import { fetchMembers, Member } from '@/queries/fetchMembers';
import DragWindow from '../components/window/DragWindow';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import RiderCard from '../components/cards/RiderCard';
import LoadingBar from '../components/LoadignBar';

const MeetTheTeam = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedRider, setSelectedRider] = useState<Member | null>(null);

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

  return (
    <div>
      <DragWindow
        header="Meet the Team"
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
            {members.map((rider) => (
              <div
                key={rider.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  alignItems: 'center',
                  width: '95px',
                  overflow: 'visible',
                  cursor: 'pointer',
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

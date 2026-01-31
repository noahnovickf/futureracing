'use client';
import { Member } from '@/queries/fetchMembers';
import DragWindow from '../window/DragWindow';
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

  if (isMobile) {
    return (
      <div
        style={{
          position: 'relative',
          zIndex: 1000,
        }}
        className="window"
      >
        <div className="title-bar">
          <div className="title-bar-text">{role}</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={onClose} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '16px',
          }}
        >
          <span style={{ fontSize: 'large', fontWeight: 'bold' }}>
            {firstName} {lastName}
          </span>
          <div
            style={{
              background: 'linear-gradient(135deg, #e0e0e0 0%, #c0c0c0 100%)',
              padding: '12px',
              borderRadius: '8px',
              boxShadow:
                'inset -1px -1px 0px rgba(0, 0, 0, 0.25), inset 1px 1px 0px rgba(255, 255, 255, 0.75), 0 4px 8px rgba(0, 0, 0, 0.2)',
              border: '2px solid #808080',
            }}
          >
            <Image
              src={`/riders/${firstName.toLocaleLowerCase()}.png`}
              alt={firstName}
              width={200}
              height={200}
              style={{
                borderRadius: '4px',
                border: '2px solid #fff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                display: 'block',
              }}
              key={id}
            />
          </div>
          <div
            style={{
              maxHeight: '200px',
              overflowY: 'scroll',
              fontSize: 'medium',
              lineHeight: '1.5',
              padding: '0 8px',
            }}
          >
            {description}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DragWindow
      header={role}
      coordinates={{
        x: typeof window !== 'undefined' ? window.innerWidth * 0.65 : 800,
        y: typeof window !== 'undefined' ? window.innerHeight * 0.15 : 150
      }}
      width={350}
      height={600}
      onClose={onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
        }}
      >
        <span style={{ fontSize: 'large', fontWeight: 'bold' }}>
          {firstName} {lastName}
        </span>
        <div
          style={{
            background: 'linear-gradient(135deg, #e0e0e0 0%, #c0c0c0 100%)',
            padding: '12px',
            borderRadius: '8px',
            boxShadow: 'inset -1px -1px 0px rgba(0, 0, 0, 0.25), inset 1px 1px 0px rgba(255, 255, 255, 0.75), 0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '2px solid #808080',
          }}
        >
          <Image
            src={`/riders/${firstName.toLocaleLowerCase()}.png`}
            alt={firstName}
            width={200}
            height={200}
            style={{
              borderRadius: '4px',
              border: '2px solid #fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              display: 'block',
            }}
            key={id}
          />
        </div>
        <div
          style={{
            maxHeight: '200px',
            overflowY: 'scroll',
            fontSize: 'medium',
            lineHeight: '1.5',
            padding: '0 8px',
          }}
        >
          {description}
        </div>
      </div>
    </DragWindow>
  );
};

export default RiderCard;

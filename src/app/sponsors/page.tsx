'use client';
import IconContainer from '../IconContainer';
import DragWindow from '../components/window/DragWindow';
import { useScreen } from '../context/ScreenContext';
import SponsorWindow from './SponsorWindow';

const Sponsors = () => {
    const { isMobile } = useScreen();
    if (isMobile) {
        return <SponsorWindow  />;
    }
  return (
    <div>
      <IconContainer />
      <DragWindow
        header="Sponsors"
        coordinates={{ x: 100, y: 100 }}
        width={600}
      >
        <SponsorWindow clickable />
      </DragWindow>
    </div>
  );
};

export default Sponsors;

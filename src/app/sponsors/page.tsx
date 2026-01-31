import IconContainer from '../IconContainer';
import DragWindow from '../components/window/DragWindow';
import SponsorWindow from './SponsorWindow';

const Sponsors = () => {
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

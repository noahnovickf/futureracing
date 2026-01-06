import IconContainer from '../IconContainer';
import StaticWindow from '../components/window/StaticWindow';

const Gallery = () => {
  return (
    <div>
      <IconContainer />
      <StaticWindow
        header="future_cycling/gallery"
        style={{
          position: 'absolute',
          width: '80%',
          left: '10%',
          top: '5%',
        }}
      >
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-1b2d3255-0249-453d-b247-53f10ead7618"
          data-elfsight-app-lazy
        ></div>
      </StaticWindow>
    </div>
  );
};
export default Gallery;

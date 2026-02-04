import Icon from './components/icon/Icon';

const iconList = [
  {
    iconPath: 'home.png',
    text: 'Home',
    path: '/',
  },
  {
    iconPath: 'riders.png',
    text: 'Meet the Team',
    path: '/meet-the-team',
  },
  {
    iconPath: 'sponsors.png',
    text: 'Sponsors',
    path: '/sponsors',
  },
  {
    iconPath: 'camera.png',
    text: 'Gallery',
    path: '/gallery',
  },
  {
    iconPath: 'music.png',
    text: 'Spotify Playlist',
    path: 'https://open.spotify.com/playlist/3DEZ4SZKJo3Wck96HUckZG?si=vpwPxL2tQeaLaEk32VHH3g&pi=vF4UUcJ8R5Csu',
  },
  {
    iconPath: 'calendar.png',
    text: 'Calendar (coming soon)',
    path: '/calendar',
    disabled: true,
  },
];

const IconContainer = () => {
  return (
    <div style={{ position: 'absolute', top: '30px', left: '10px' }}>
      {iconList.map(({ iconPath, text, path, disabled }) => (
        <Icon
          img={iconPath}
          text={text}
          path={path}
          key={iconPath}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default IconContainer;

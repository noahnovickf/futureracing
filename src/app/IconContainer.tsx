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
    iconPath: 'news3.png',
    text: 'News',
    path: '/news',
  },
  {
    iconPath: 'camera.png',
    text: 'Gallery',
    path: '/gallery',
  },
  {
    iconPath: 'calendar.png',
    text: 'Calendar (coming soon)',
    path: '/calendar',
  },
];

const IconContainer = () => {
  return (
    <div style={{ position: 'absolute', top: '30px', left: '10px' }}>
      {iconList.map(({ iconPath, text, path }) => (
        <Icon img={iconPath} text={text} path={path} key={iconPath} />
      ))}
    </div>
  );
};

export default IconContainer;

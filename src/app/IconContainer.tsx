import Icon from "./components/icon/Icon"

const iconList = [{
  iconPath: 'riders.png',
  text: 'Meet the Team',
  path: '/meet-the-team'
},{
  iconPath: 'folder.png',
  text: 'Sponsors',
  path: '/sponsors'
},{
  iconPath: 'news.png',
  text: 'News',
  path: '/news'
},{
  iconPath: 'camera.png',
  text: 'Gallery',
  path: '/gallery'
},{
  iconPath: 'calendar.png',
  text: 'Calendar',
  path: '/calendar'
}]


const IconContainer = () => {
  return (
    <div style={{ position: 'absolute', top: '30px', left: '10px'}}>
      {iconList.map(({iconPath, text}) => <Icon img={iconPath} text={text} key={iconPath}/>)}
    </div>
  )
}

export default IconContainer
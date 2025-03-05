import Image from 'next/image';
import styles from './Icon.module.css';

const Icon = ({ img, text }: { img: string, text: string }) => {
  return (
    <div className={styles.icon}>
      <Image 
        src={`/${img}`}
        alt={text}
        width={32}
        height={32}
        style={{
          objectFit: 'contain'}}
      />
      <span className={styles.iconText}>{text}</span>
    </div>
  );
}

export default Icon;
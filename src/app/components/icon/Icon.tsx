import Image from 'next/image';
import Link from 'next/link';
import styles from './Icon.module.css';

const Icon = ({
  img,
  text,
  path,
}: {
  img: string;
  text: string;
  path: string;
}) => {
  return (
    <Link href={path} className={styles.icon}>
      <Image
        src={`/${img}`}
        alt={text}
        width={32}
        height={32}
        style={{ objectFit: 'contain' }}
      />
      <span className={styles.iconText}>{text}</span>
    </Link>
  );
};

export default Icon;

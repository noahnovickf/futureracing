import Image from 'next/image';
import Link from 'next/link';
import styles from './Icon.module.css';

const Icon = ({
  img,
  text,
  path,
  disabled = false,
}: {
  img: string;
  text: string;
  path: string;
  disabled?: boolean;
}) => {
  return (
    <Link
      aria-disabled={disabled}
      href={path}
      className={styles.icon}
      style={{
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
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

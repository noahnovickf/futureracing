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
  const isExternal = path.startsWith('http://') || path.startsWith('https://');

  const content = (
    <>
      <Image
        src={`/${img}`}
        alt={text}
        width={32}
        height={32}
        style={{ objectFit: 'contain' }}
      />
      <span className={styles.iconText}>{text}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        aria-disabled={disabled}
        href={path}
        className={styles.icon}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          pointerEvents: disabled ? 'none' : 'auto',
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      aria-disabled={disabled}
      href={path}
      className={styles.icon}
      style={{
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      {content}
    </Link>
  );
};

export default Icon;

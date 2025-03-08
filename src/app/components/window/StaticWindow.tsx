import { CSSProperties, ReactNode } from 'react';
import styles from './DragWindow.module.css';

type StaticWindowProps = {
  children: ReactNode;
  header: string;
  style?: CSSProperties;
  onClose: () => void;
};

const StaticWindow = ({
  children,
  header,
  style,
  onClose,
}: StaticWindowProps) => {
  return (
    <div
      className={'window'}
      style={{
        position: 'absolute',
        ...style,
      }}
    >
      <div className={`title-bar ${styles.titleBar}`}>
        <div className="title-bar-text">{header}</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={onClose} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default StaticWindow;

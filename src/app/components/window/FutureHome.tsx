import Image from 'next/image';

const FutureHome = ({ width, height }: { width: number; height: number }) => {
  return (
    <div
      className="window-body"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Image
        src="/FutureLogo.png"
        alt="Future Racing Logo"
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default FutureHome;

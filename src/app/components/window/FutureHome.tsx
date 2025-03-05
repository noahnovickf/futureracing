import Image from 'next/image';

const FutureHome = () => {
  return (
    <div className="window-body" style={{display: 'flex', justifyContent: 'center'}}>
      <Image 
        src="/FutureLogo.png"
        alt="Future Racing Logo"
        width={300}
        height={300}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}

export default FutureHome
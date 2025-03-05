const welcomeArray = Array(98).fill("Welcome to www.futureracing.cc");

const Welcome = () => {
  return (
    <div className="window-body" style={{
        overflowY: 'scroll',
        overflowX: 'visible',
        maxHeight: '300px'
      }}>
        <div style={{ textAlign: "left", fontSize: '14px' }}>
          {welcomeArray.map((text, index) => (
            <p key={index} style={{marginBottom: '5px'}}>
              {text}
              <br />
            </p>
          ))}
          <p style={{marginTop: '12px'}}>Why would you scroll down here?</p>
        </div>
      </div>
  )
}

export default Welcome
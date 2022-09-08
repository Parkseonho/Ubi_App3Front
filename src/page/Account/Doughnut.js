const Doughnut = () => (
    <div style={{ marginTop: '20px', marginLeft: '80px' }}>
      <div style={{ width: '200px', height: '200px' }}>
        <svg viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="beige" strokeWidth="20" />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="green"
            strokeWidth="20"
            strokeDasharray={2 * Math.PI * 90 * 0.75}
          />
        </svg>
      </div>
    </div>
  );
  
  export default Doughnut;
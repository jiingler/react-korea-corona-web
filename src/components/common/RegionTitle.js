const RegionTitle = ({regionName, refreshDateTime}) => (
  <div className="region-title p-3 mb-2">
    <h2 className="position-title">{regionName} 현황</h2>
    <p className="refresh-datetime">({refreshDateTime} 기준)</p>
  </div>
);

export default RegionTitle;
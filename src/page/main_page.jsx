import React, { useState } from 'react';
import LoadImage from '../component/LoadImage';
import Result from '../component/Result';
import ClassCard from '../component/ClassCard';

const MainPage = () => {
  const [result, setResult] = useState(null);

  const handleCloseModal = () => setResult(null);

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <ClassCard />
      <LoadImage onResult={setResult} />
      {result && <Result data={result} onClose={handleCloseModal} />}
    </div>
  );
};

export default MainPage;

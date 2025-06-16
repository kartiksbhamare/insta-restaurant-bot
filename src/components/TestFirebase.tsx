import React, { useEffect, useState } from 'react';
import { testBackendConnection, testFirebaseConnection } from '../services/api/apiService';

const TestFirebase: React.FC = () => {
  const [testData, setTestData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testConnections = async () => {
      try {
        console.log('\n🔍 Testing connections...');
        console.log('----------------------------------------');

        // Test backend connection
        const backendResponse = await testBackendConnection();
        console.log('✅ Backend connection successful!');
        console.log('📡 Backend response:', backendResponse);

        // Test Firebase connection through backend
        const firebaseResponse = await testFirebaseConnection();
        console.log('✅ Firebase connection successful!');
        console.log('🔥 Firebase test document:', firebaseResponse.data);
        console.log('----------------------------------------\n');
        
        setTestData(firebaseResponse.data);
        setLoading(false);
      } catch (err: any) {
        console.error('❌ Connection test failed:', err);
        setError(err.message || 'Failed to connect');
        setLoading(false);
      }
    };

    testConnections();
  }, []);

  if (loading) return <div>Testing connections...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Connection Tests</h2>
      {testData && (
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '15px', 
          borderRadius: '5px',
          marginTop: '10px'
        }}>
          <h3>✅ All Connections Successful!</h3>
          <div style={{ marginTop: '10px' }}>
            <p><strong>Document ID:</strong> {testData.id}</p>
            <p><strong>Message:</strong> {testData.message}</p>
            <p><strong>Timestamp:</strong> {testData.timestamp}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestFirebase; 
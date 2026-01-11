import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';

export function BoothPage() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Photo Booth</h1>
      <p style={{ marginBottom: '24px' }}>Camera Setup & Capture (Coming Soon)</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Link to="/">
          <Button variant="secondary">Back Home</Button>
        </Link>
        <Link to="/gallery">
          <Button variant="ghost">View Gallery</Button>
        </Link>
      </div>
    </div>
  );
}

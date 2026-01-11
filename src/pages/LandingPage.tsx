import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';

export function LandingPage() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Landing Page</h1>
      <p style={{ marginBottom: '24px' }}>Welcome to Snaapy</p>
      <Link to="/booth">
        <Button>Enter Booth</Button>
      </Link>
    </div>
  );
}

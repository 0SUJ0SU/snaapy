import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';

export function GalleryPage() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>Gallery</h1>
      <p style={{ marginBottom: '24px' }}>No photos yet!</p>
      <Link to="/booth">
        <Button>Take a Photo</Button>
      </Link>
    </div>
  );
}

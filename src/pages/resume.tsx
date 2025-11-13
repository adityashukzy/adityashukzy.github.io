import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ResumeRedirect() {
  const router = useRouter();
  useEffect(() => {
    window.location.href = 'https://drive.google.com/file/d/1dAEUjbD1nZ-3_lMRFr3mjpZFFrlIOOO0/view?usp=sharing';
  }, [router]);
  return null;
}

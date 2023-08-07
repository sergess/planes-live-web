import { isMobile } from '@/utils/serverComponent';

export default function Layout({ desktop, mobile }) {
  if (isMobile()) {
    return mobile;
  }

  return desktop;
}

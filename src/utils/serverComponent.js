import { headers } from 'next/headers';

// eslint-disable-next-line import/prefer-default-export
export const isMobile = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');

  return userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  );
};

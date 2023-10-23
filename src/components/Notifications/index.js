import React from 'react';

import styles from './notifications.module.scss';
import Item from './Item';

const TOP_ROW_ITEMS = [
  'Departed', 'Reminders',
  'Gate change', 'Terminal change'];
const BOTTOM_ROW_ITEMS = [
  'Updates', 'Online check-in',
  'Landed', 'Time change'];

export default function Notifications() {
  return (
    <div className={styles.container}>
      <div className={styles.rowTop}>
        {TOP_ROW_ITEMS.map((i) => (
          <Item
            key={i}
          >
            {i}
          </Item>
        ))}
      </div>
      <div className={styles.rowBottom}>
        {BOTTOM_ROW_ITEMS.map((i) => (
          <Item
            key={i}
          >
            {i}
          </Item>
        ))}
      </div>
    </div>
  );
}

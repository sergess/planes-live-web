import React from 'react';

import styles from './notifications.module.css';
import Item from './Item';

const TOP_ROW_ITEMS = [
  'Departured', 'Reminders',
  'Gate change', 'Terminal change', 'Departured', 'Reminders',
  'Gate change', 'Terminal change'];
const BOTTOM_ROW_ITEMS = [
  'Updates', 'Online check-in',
  'Landed', 'Time change', 'Updates', 'Online check-in',
  'Landed', 'Time change'];

export default function Notifications() {
  return (
    <div className={styles.container}>
      <div className={styles.rowTop}>{TOP_ROW_ITEMS.map((i) => <Item>{i}</Item>)}</div>
      <div className={styles.rowBottom}>{BOTTOM_ROW_ITEMS.map((i) => <Item>{i}</Item>)}</div>
    </div>
  );
}
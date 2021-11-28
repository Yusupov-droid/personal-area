import lodash from 'lodash';
import { LowSync, JSONFileSync } from 'lowdb';

const adapter = new JSONFileSync('db.json');

const db = new LowSync(adapter);
db.read();
db.chain = lodash.chain(db.data);

export { db };

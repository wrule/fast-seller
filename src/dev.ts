import 'global-agent/bootstrap';
import fs from 'fs';
import { bitget, binance } from 'ccxt';

const secret = require('../secrets/bitget.json');

function flog(data: any) {
  fs.writeFileSync('output/a.json', JSON.stringify(data, null, 2));
}

async function dev() {
  const ex = new bitget(secret);
  await ex.loadMarkets();
  const balance = await ex.fetchBalance();
  flog(balance);
}

dev();

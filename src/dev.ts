import 'global-agent/bootstrap';
import fs from 'fs';
import { bitget, binance, mexc } from 'ccxt';

const secret = require('../secrets/mexc.json');

function flog(data: any) {
  fs.writeFileSync('output/a.json', JSON.stringify(data, null, 2));
}

async function dev() {
  const ex = new mexc(secret);
  await ex.loadMarkets();
  const balance = await ex.fetchBalance();
  flog(balance);
}

dev();

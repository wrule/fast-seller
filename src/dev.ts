import 'global-agent/bootstrap';
import { bitget, binance } from 'ccxt';

const secret = require('../secrets/bitget.json');

async function dev() {
  const ex = new bitget(secret);
  await ex.loadMarkets();
  const b = await ex.fetchBalance();
  console.log(b);
}

dev();

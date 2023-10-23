
export
interface Seller {
  Watch(): void;
  Sell(baseAmount: number): Promise<void>;
}

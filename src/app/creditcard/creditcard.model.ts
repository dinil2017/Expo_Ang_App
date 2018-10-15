export class CreditCard {
  cardNo: string;
  bank: string;
  cardHolder: string;
  expiryDate: Date;
  limit: number;
  dueAmount: number;
  dueDate: Date;

  constructor(cardNo: string, bank: string, cardHolder: string,
    expiryDate: Date, limit: number, dueAmount: number, dueDate: Date) {
    this.cardNo = cardNo;
    this.bank = bank;
    this.cardHolder = cardHolder;
    this.expiryDate = expiryDate;
    this.limit = limit;
    this.dueAmount = dueAmount;
    this.dueDate = dueDate;
  }
}

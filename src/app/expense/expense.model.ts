export class Expense {

  expDate: Date;
  expItem: string;
  expAmount: number;
  expRemark: string;

  constructor(expDate: Date, expItem: string, expAmount: number, expRemark: string){
    this.expDate = expDate;
    this.expItem = expItem;
    this.expAmount = expAmount;
    this.expRemark = expRemark;
  }
}

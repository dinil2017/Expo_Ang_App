import { CreditCard } from "./creditcard.model";

export class CreditCardService {

  // cards: CreditCard[] = [];

  cards: CreditCard[] = [
    new CreditCard(
      '5400124567894550',
      'Dubai First',
      'Dinil',
      new Date(2019,10,5),
      20000,
      1500,
      new Date(2018,10,5)
    ),
    new CreditCard(
      '6540245678940712',
      'EI',
      'Dinil',
      new Date(2020,10,5),
      50000,
      100,
      new Date(2018,10,25)
    ),
    new CreditCard(
      '7008124567894999',
      'ENBD',
      'Dinil',
      new Date(2021,1,5),
      5000,
      500,
      new Date(2018,10,15)
    )
  ];

  getCreditCards() {
    return this.cards;
  }

  getCreditCard(index: number) {
    return this.cards[index];
  }

  addCreditCard(card: CreditCard) {
    this.cards.push(card);
  }

  updateCreditCard(id: number, card: CreditCard): any {
    this.cards[id] = card;
  }

  deleteCreditCard(index: number) {
    this.cards.splice(index, 1);
  }

}

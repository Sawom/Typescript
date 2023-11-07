{
  // access modifiers
//  use of public private 
// class theke child class e extend korle tokhn protected korte hoy
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; // private veriable gula _ emn underscore diye declear kora lage

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

   public  addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

   public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount{
    test(){
      this.addDeposit
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  //
}
export class FinancialPlanningService {
  static FinancialArea = {
    NEED: 1,
    WANT: 2,
    INVESTMENT: 3
  }

  static financialPlanning= {
    name: 'Yaswa Hemanth',
    age: '25',
    gender: 'Male',
    monthlyIncome: 30000,
    rule: {
      wants: 30,
      needs: 30,
      investments: 40
    },
    List: [
      {
        id: 1,
        item: 'AC',
        amount: 25000,
        isActive: true,
        financialArea: this.FinancialArea.WANT
      },
      {
        id: 2,
        item: 'Games',
        amount: 5000,
        isActive: true,
        financialArea: this.FinancialArea.WANT
      },
      {
        id: 3,
        item: 'Trip',
        amount: 30000,
        isActive: true,
        financialArea: this.FinancialArea.WANT
      },
      {
        id: 4,
        item: 'Rent',
        amount: 8000,
        isActive: true,
        financialArea: this.FinancialArea.NEED
      },
      {
        id: 5,
        item: 'currentBill',
        amount: 5000,
        isActive: true,
        financialArea: this.FinancialArea.NEED
      },
      {
        id: 6,
        item: 'Policy',
        amount: 8000,
        isActive: true,
        financialArea: this.FinancialArea.NEED
      },
      {
        id: 7,
        item: 'LIC',
        amount: 2500,
        isActive: true,
        financialArea: this.FinancialArea.INVESTMENT
      },
      {
        id: 8,
        item: 'SBI',
        amount: 2500,
        isActive: true,
        financialArea: this.FinancialArea.INVESTMENT
      }
    ]
  }

  static getAllFinancialPlanning () {
    return this.financialPlanning
  }

  //   static wantsList = [
  //     {
  //       id: 1,
  //       want: 'AC',
  //       amount: 25000,
  //       isActive: true
  //     },
  //     {
  //       id: 2,
  //       want: 'Games',
  //       amount: 5000,
  //       isActive: true
  //     },
  //     {
  //       id: 3,
  //       want: 'Trip',
  //       amount: 30000,
  //       isActive: true
  //     }
  //   ]

  //   static needsList = [
  //     {
  //       id: 1,
  //       need: 'Rent',
  //       amount: 8000,
  //       isActive: true,
  //       isEstimated: false
  //     },
  //     {
  //       id: 2,
  //       need: 'currentBill',
  //       amount: 8000,
  //       isActive: true,
  //       isEstimated: true
  //     },
  //     {
  //       id: 3,
  //       need: 'Policy',
  //       amount: 8000,
  //       isActive: true,
  //       isEstimated: false
  //     }
  //   ]

  //   static getAllWants () {
  //     return this.wantsList
  //   }

  //   static getAllNeeds () {
  //     return this.needsList
  //   }

  //   static getAllRules () {
  //     return this.rule
  //   }
}

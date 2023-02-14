<template>
    <div>
     <div class="container mt-3">
        <div class="row">
            <div class="col input-group">
                <span class="input-group-text"><i class="fa-sharp fa-solid fa-indian-rupee-sign"></i></span>
                <input class="btn btn-light form-control" v-model="financialPlanning.monthlyIncome" type="text" placeholder="Monthly Salary">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-sm-8 col-md-9 col-lg-9 mx-1">
                <div class="d-flex">
                    <span class="h3 mx-2 mt-3 text-primary">Rule</span>
                    <div class="form-floating mx-2">
                        <input :class="['form-control', {'is-invalid': isDangerInvalid, 'is-valid': !isDangerInvalid}]"  v-model="financialPlanning.rule.needs" @change="ruleNeeds(financialPlanning.rule.needs)" id="Needss" type="text" placeholder="Needs" />
                        <label for="Needss">Needs</label>
                    </div>

                    <div class="form-floating mx-2">
                        <input :class="['form-control', {'is-invalid': isDangerInvalid, 'is-valid': !isDangerInvalid}]" v-model="financialPlanning.rule.wants" @change="ruleWants(financialPlanning.rule.wants)" id="floatingWants" type="text" placeholder="Wants" />
                        <label for="floatingWants">Wants</label>
                    </div>

                    <div class="form-floating mx-2">
                        <input :class="['form-control',  {'is-invalid': isDangerInvalid, 'is-valid': !isDangerInvalid}]"  v-model="financialPlanning.rule.investments" @change="ruleInvestments(financialPlanning.rule.investments)" id="floatingInventments" type="text" placeholder="Investments" />
                        <label for="floatingInventments">Investments</label>
                    </div>
                </div>
            </div>

            <div class="col mx-1">
                <div :class="['mx-2 row border border-1 border-secondary rounded-pill h-100', {'bg-danger': IsDangerOnhand}, {'bg-success': !IsDangerOnhand}]">
                    <span class="col text-white font-weight-bold d-flex align-items-center justify-content-center pt-sm-0 pt-0">On Hand</span>
                    <span class="col text-white d-flex align-items-center justify-content-center pt-1 pt-sm-0">{{onHand()}}</span>
                </div>
            </div>
        </div>
     </div>

     <div class="container mt-3">
        <div class="row">
            <div class="col d-flex">
<!-- Needs -->
                <div col-md-4>
                    <div class="card m-2 shadow-lg border border-4 border-success">
                        <div class="card-body">
                            <div class="card-title h5">
                                <div class="card-title h5">
                                    <h2>Needs</h2>
                                    <div class="d-flex justify-content-between">
                                      <span class="mx-1">{{ financialPlanning.monthlyIncome * financialPlanning.rule.needs / 100 }}</span>
                                      <span class=""><i class="fa-solid fa-plus btn btn-primary ml-1" @click="showPopupCreate = true, passCreateItemTochild(1)"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-text mt-1">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                        </div>
                        <div class="container">
                            <ul class="list-group list-group-flush" v-for="person in financialPlanning.List" :key="person.id">
                                <li class="list-group-item border border-2 border-dark mb-1 bg-transparent" v-if="person.financialArea === 1">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="mx-2 row border border-3 border-primary rounded">
                                        <span class="font-weight-bold d-flex align-items-center justify-content-center pt-sm-0 pt-0">{{ person.item}}</span>
                                        <span class="d-flex align-items-center justify-content-center pt-1 pt-sm-0">{{ person.amount }}</span>
                                      </div>
                                      <span class="">
                                        <i class="fa-solid fa-trash btn btn-danger m-1" @click="deleteCardItem(person.id)"></i>
                                        <i class="fa-solid fa-pen-to-square btn btn-info m-1" @click="getUpdateId(person.id)" ></i>
                                      </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
<!-- Wants -->
                <div col-md-4>
                    <div class="card m-2 shadow-lg border border-4 border-success">
                        <div class="card-body">
                            <div class="card-title h5">Wants <span class="float-right mx-1">{{ financialPlanning.monthlyIncome * financialPlanning.rule.wants / 100 }}</span>
                                <i class="fa-solid fa-plus btn btn-primary ml-1" @click="showPopupCreate = true, passCreateItemTochild(2)"></i>
                            </div>
                            <div class="card-text mt-1">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                        </div>
                        <div class="container">
                            <ul class="list-group list-group-flush" v-for="person in financialPlanning.List" :key="person.id">
                                <li class="list-group-item border border-2 border-dark mb-1" v-if="person.financialArea === 2">
                                    <span class="mt-1 pl-1 h5 text-capitalize">{{ person.item}}</span>
                                    <span class="float-right mt-1">
                                        <i class="fa-solid fa-trash btn btn-danger ml-1 mt-1"  @click="deleteCardItem(person.id)"></i>
                                        <i class="fa-solid fa-pen-to-square btn btn-info ml-1 mt-1" @click="getUpdateId(person.id)"></i>
                                    </span><span class="float-right mt-1 btn">{{ person.amount }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
<!-- Investments -->
                <div col-md-4>
                    <div class="card m-2 shadow-lg border border-4 border-success">
                        <div class="card-body">
                            <div class="card-title h5">Investments <span class="float-right mx-1">{{ financialPlanning.monthlyIncome * financialPlanning.rule.investments / 100 }}</span>
                                <i class="fa-solid fa-plus btn btn-primary ml-1" @click="showPopupCreate = true, passCreateItemTochild(3)"></i>
                            </div>
                            <div class="card-text mt-1">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                        </div>
                        <div class="conatainer">
                            <ul class="list-group list-group-flush" v-for="person in financialPlanning.List" :key="person.id">
                                <li class="list-group-item border border-2 border-dark m-1" v-if="person.financialArea === 3">
                                    <span class="mt-1 h5 text-capitalize">{{ person.item}}</span>
                                    <span class="float-right mt-1 mr-1">
                                        <i class="fa-solid fa-trash btn btn-danger ml-1 mt-1"  @click="deleteCardItem(person.id)"></i>
                                        <i class="fa-solid fa-pen-to-square btn btn-info ml-1 mt-1" @click="getUpdateId(person.id)"></i>
                                    </span><span class="float-right mt-1 mr-1 btn">{{ person.amount }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>

     <UpdatePopup v-if="showPopupUpdate" @updateObj="updateItem" @close="showPopupUpdate = false" :item = "item">
        <h4 v-if="item.financialArea === 1">Need Update Form</h4>
        <h4 v-if="item.financialArea === 2">Want Update Form</h4>
        <h4 v-if="item.financialArea === 3">Investment Update Form</h4>
    </UpdatePopup>

    <CreatePopup v-if="showPopupCreate" @createObj="createItem" @close="showPopupCreate =  false" :item = "item">
        <h4 v-if="item.financialArea === 1">Need Create Form</h4>
        <h4 v-if="item.financialArea === 2">Want Create Form</h4>
        <h4 v-if="item.financialArea === 3">Investment Create Form</h4>
    </CreatePopup>
    </div>
</template>

<script>
import { FinancialPlanningService } from '@/services/FinancialPlanningService.js'
import UpdatePopup from '../UpdatePopup.vue'
import CreatePopup from '../CreatePopup.vue'
export default {
  name: 'VuexFinancialPlanning',
  components: {
    UpdatePopup,
    CreatePopup
  },
  data () {
    return {
      financialPlanning: FinancialPlanningService.getAllFinancialPlanning(),
      isDangerInvalid: false,
      showPopupUpdate: false,
      showPopupCreate: false,
      getUpdateIdValue: 0,
      IsDangerOnhand: false,
      item: {
        id: 0,
        item: '',
        amount: 0,
        isActive: true,
        financialArea: 0
      }
    }
  },
  methods: {
    ruleValidation () {
      const total = parseInt(this.financialPlanning.rule.wants) + parseInt(this.financialPlanning.rule.needs) + parseInt(this.financialPlanning.rule.investments)
      if (total === 100) {
        this.isDangerInvalid = false
      } else {
        this.isDangerInvalid = true
      }
    },
    ruleNeeds (value) {
      this.financialPlanning.rule.needs = value
      console.log(this.financialPlanning.rule.needs)
      this.ruleValidation()
    },
    ruleWants (value) {
      this.financialPlanning.rule.wants = value
      console.log(this.financialPlanning.rule.wants)
      this.ruleValidation()
    },
    ruleInvestments (value) {
      this.financialPlanning.rule.investments = value
      console.log(this.financialPlanning.rule.investments)
      this.ruleValidation()
    },
    // number for need=1 wants=2 investment=3
    deleteCardItem (id) {
      console.log(id)
      const itemIndex = this.financialPlanning.List.findIndex(item => item.id === id)
      console.log(itemIndex)
      this.financialPlanning.List.splice(itemIndex, 1)
    },
    getUpdateId (id) {
      this.showPopupUpdate = true
      const item = this.financialPlanning.List.find(item => item.id === id)
      this.item.id = item.id
      this.item.item = item.item
      this.item.amount = item.amount
      this.item.isActive = item.isActive
      //     console.log('item.financialArea', item.financialArea)
      this.item.financialArea = item.financialArea
      //     console.log('this.financialArea', this.item.financialArea)
    },
    updateItem (obj) {
      console.log(obj)
      const itemIndex = this.financialPlanning.List.findIndex(item => item.id === obj.id)
      this.financialPlanning.List.splice(itemIndex, 1, obj)
    },
    onHand () {
      const monthlyIncome = this.financialPlanning.monthlyIncome
      const totalNeed = this.financialPlanning.List.reduce((acc, value) => {
        if (value.financialArea === 1) {
          acc = acc + parseInt(value.amount)
        }
        return acc
      }, 0)
      const totalWant = this.financialPlanning.List.reduce((acc, value) => {
        if (value.financialArea === 2) {
          acc = acc + parseInt(value.amount)
        }
        return acc
      }, 0)
      const totalInvestment = this.financialPlanning.List.reduce((acc, value) => {
        if (value.financialArea === 3) {
          acc = acc + parseInt(value.amount)
        }
        return acc
      }, 0)
      const onHandTotal = monthlyIncome - totalNeed - totalWant - totalInvestment
      if (onHandTotal >= 0) this.IsDangerOnhand = false
      else this.IsDangerOnhand = true
      //     console.log('Monthly income', monthlyIncome)
      //     console.log('totalNeed', totalNeed)
      //     console.log('totalWant', totalWant)
      //     console.log('totalInvestment', totalInvestment)
      //     console.log('onhand', onHandTotal)
      return onHandTotal
    },
    passCreateItemTochild (financialArea) {
      this.item.financialArea = financialArea
      this.item.id = parseInt(this.financialPlanning.List.length) + 1
    },
    createItem (createObj) {
      this.financialPlanning.List.push(createObj)
    }
  }
}
</script>

<style scoped>
.myHoverClass:hover {
  background-color: #00b0ff;
}

</style>

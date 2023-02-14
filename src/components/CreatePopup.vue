<template>
    <div class="popup">
        <div class="popup-inner w-auto h-auto">
          <slot/>
          <form @submit.prevent="createFormValidation()">
            <div class="">
              <div class="form-floating m-2">
                  <input class="form-control" v-model.trim="createItem.item" id="Need" type="text" />
                  <label for="Need" v-if="createItem.financialArea === 1">Need</label>
                  <label for="Need" v-if="createItem.financialArea === 2">Want</label>
                  <label for="Need" v-if="createItem.financialArea === 3">Investment</label>
              </div>
              <div class="form-floating m-2">
                  <input class="form-control" v-model.number="createItem.amount" id="Amount" type="number" />
                  <label for="Amount">Amount</label>
              </div>
              <div class="mt-1 float-left d-flex justify-content-between">
                <input type="submit" class="btn btn-primary"  value="Create">
                <button class="btn btn-danger"  @click="$emit('close')">Close</button>
              </div>
            </div>
          </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CreatePopup',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    const createItem = {
      id: this.item.id,
      item: this.item.item,
      amount: this.item.amount,
      isActive: this.item.isActive,
      financialArea: this.item.financialArea
    }
    const regex = /^[a-zA-Z]([^0-9][0-9]?)?/
    // Staring letter should be alpha and rest is the combination of alphanumeric
    return {
      createItem,
      regex
    }
  },
  methods: {
    createFormValidation () {
      if (!this.checkNameAlphaNumeric()) return false

      if (this.createItem.item && this.createItem.amount) {
        this.$emit('CreateObj', this.createItem)
        this.$emit('close')
        return true
      } else alert('Please enter the Name and Amount')
    },
    checkNameAlphaNumeric () {
      console.log(this.regex.test(this.createItem.item))
      if (!this.regex.test(this.createItem.item)) {
        alert('The Name should not start with Numeric')
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;

    display: flex;
    align-items: center;
    justify-content: center;
}
.popup-inner {
  background: #eee;
  padding: 32px;
  border: 2px solid black;
  border-radius: 5px;
}
</style>

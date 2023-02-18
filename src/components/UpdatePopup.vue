<template>
 <div>
    <!-- <div class="popup">
        <div class="popup-content">
            <p>PopUp content goes here</p>
            <button class="btn btn-primary"  @click="$emit('close')">Close</button>
        </div>
    </div> -->
    <div class="popup">
       <div class="popup-inner w-auto h-auto">
            <slot />
            <form @submit.prevent="$emit('close'), $emit('updateObj', this.updateItem)">
               <div class="">
                    <div class="form-floating m-2">
                        <input class="form-control" v-model="updateItem.item" id="Need" type="text" />
                        <label for="Need" v-if="updateItem.financialArea === 1">Need</label>
                        <label for="Need" v-if="updateItem.financialArea === 2">Want</label>
                        <label for="Need" v-if="updateItem.financialArea === 3">Investment</label>
                    </div>
                    <div class="form-floating m-2">
                        <input class="form-control" v-model="updateItem.amount" id="Amount" type="number" />
                        <label for="Amount">Amount</label>
                    </div>
                    <div class="mt-1 d-flex justify-content-between">
                      <input type="submit" class="btn btn-primary" value="Update">
                      <button class="btn btn-danger"  @click="$emit('close')">Close</button>
                    </div>
               </div>
            </form>
       </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'UpdatePopup',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    const updateItem = {
      id: this.item.id,
      item: this.item.item,
      amount: this.item.amount,
      isActive: this.item.isActive,
      financialArea: this.item.financialArea
    }
    return {
      updateItem
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
  background-color: rgba(0, 0, 0, 0.2);

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

<script setup>
import { ref } from 'vue'

const bitcoinPrice = ref(90468)

const wertheute = ref(0)
const gewinn = ref(0)
const investedSum = ref(0)
const kontostand = ref(0)

const investments = ref([])

const inputCount = ref('')
const inputPrice = ref('')

function add () {
  const count = Number(inputCount.value)
  const price = Number(inputPrice.value)

  if (!count || !price) {
    alert("Bitte Anzahl und Preis eingeben!")
    return
  }

  const investmentValue = count * price
  investedSum.value += investmentValue
  wertheute.value = count * bitcoinPrice.value
  gewinn.value = wertheute.value - investedSum.value
  kontostand.value = gewinn.value

  investments.value.push({
    count,
    price
  })

  inputCount.value = ''
  inputPrice.value = ''
}
</script>

<template>
  <h1>Bitcoin-Investment-Rechner</h1>

  <!-- Formular -->
  <form @submit.prevent="add" class="investment-form box">
    <h3>Neues Investment erfassen</h3>

    <div>
      <label for="count">Anzahl gekaufte Bitcoins</label>
      <input type="number" id="count" v-model="inputCount">
    </div>

    <div>
      <label for="price">Bitcoin-Kurs</label>
      <input type="number" id="price" v-model="inputPrice">
    </div>

    <button type="submit">Erfassen</button>
  </form>

  <!-- Anzeige -->
  <div class="box">
    <dl>
      <dt>Dein Kontostand</dt>
      <dd>{{ kontostand }} CHF</dd>

      <dt>Investiert</dt>
      <dd>{{ investedSum }} CHF</dd>

      <dt>Wert heute</dt>
      <dd>{{ wertheute }} CHF</dd>

      <dt>Gewinn</dt>
      <dd>{{ gewinn }} CHF</dd>
    </dl>
  </div>

  <!-- Liste -->
  <ul class="box">
    <li v-for="(item, j) in investments" :key="j">
      {{ item.count }} BTC zum Preis von {{ item.price }} CHF
    </li>
  </ul>
</template>

<style>
:root {
  --input-height: 38px;
}
* {
  box-sizing: border-box;
}
body {
  margin: 80px
}
label {
  display: block;
  margin-bottom: 4px;
  font-size: 15px;
  color: black;
}
input {
  padding: 4px;
  height: var(--input-height);
  appearance: none;
  border: 1px solid #aaa;
  border-radius: 4px;
  width: 100%;
}
button {
  appearance: none;
  background: #3861fb;
  color: #fff;
  height: var(--input-height);
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
}
.box {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
}
.box + .box {
  margin-top: 20px;
}
.investment-form {
  margin-top: 40px;
}
.investment-form h3 {
  margin-top: 0;
}
dl {
  margin: 0;
  color: black;
}
dt {
  font-weight: bold;
  font-size: 15px;
  color: black;
}
dt:not(:first-child) {
  margin-top: 20px;
}
dd {
  margin: 4px 0 0;
}
ul {
  margin: 0;
  list-style: none;
}
li {
  padding: 8px 0;
  color: black;
}
li:not(:last-child) {
  border-bottom: 1px solid #e0e0e0;
}
h3{
  color: black;
}
</style>

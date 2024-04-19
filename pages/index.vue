<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <Vcard class="bg-white">
            <template #header>
                <div class="flex flex-row items-center gap-5">
                    <Vinput v-model="state.days" :style="'border rounded-lg p-3 w-14 md:w-28 ' + state.error" label="DAY" :holder="'DD'" />
                    <Vinput v-model="state.months" :style="'border rounded-lg p-3 w-14 md:w-28 ' + state.error" label="MONTH" :holder="'MM'" />
                    <Vinput v-model="state.years" :style="'border rounded-lg p-3 w-20 md:w-28 ' + state.error" label="YEAR" :holder="'YYYY'" />
                </div>
                <div class="">

                </div>
            </template>
            <template #content>
                <VageText
                    :array-time="[{ key: calculate.years, text: 'years' }, { key: calculate.months, text: 'months' }, { key: calculate.days, text: 'days' }]" />
            </template>
        </Vcard>
    </div>
</template>
<script lang="ts" setup>
import { Age } from "../utils/age"
const state = reactive({
    years: undefined as undefined | number,
    months: undefined as undefined | number,
    days: undefined as undefined | number,
    error: undefined as undefined | string,
    errorMsg: "" as string
})
const calculate = computed(() => {
    if (state.years && state.months && state.days) {
        if ((state.months < 1 || state.months > 12)) {
            state.error = "border-red-500"
            state.errorMsg = "Incorrect month date"
            return { years: 0, months: 0, days: 0 }
        }

        if (state.years < 100) {
            state.error = "border-red-500"
            state.errorMsg = "Year should be more than 100"
            return { years: 0, months: 0, days: 0 }
        }

        if (state.days > 31) {
            state.error = "border-red-500"
            state.errorMsg = "Incorrect day date"
            return { years: 0, months: 0, days: 0 }
        }
        return Age.calculate(state.years, state.months, state.days)
    }else{
        return { years: 0, months: 0, days: 0 }
    }
})
</script>
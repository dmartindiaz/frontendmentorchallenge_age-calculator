<template>
    <div class="flex flex-col gap-1">
        <label class="font-semibold text-gray-500">{{ props.label?.toUpperCase() }}</label>
        <input :placeholder="props.holder" type="number" :class="$props.style" v-model = "model">
    </div>
</template>

<script setup lang="ts">
const model = defineModel()
const props = defineProps({
    label: String,
    holder: String,
    style: String,
})
</script>
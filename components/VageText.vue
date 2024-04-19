<template>
    <div class="flex flex-col gap-5">
        <p v-for="(item,i) in props.arrayTime" :key="i" class="font-extrabold text-6xl italic"><span class="mr-2 text-purple-500">{{ item.key }}</span>{{ item.text }}</p>
    </div>
</template>
<script lang="ts" setup>
    interface TimeInterface {
        key: number,
        text: string
    }
    const props = defineProps({
        arrayTime: Array as PropType<Array<TimeInterface>>
    })
</script>
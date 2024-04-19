<template>
    <div style="border-bottom-left-radius: 100px;" class="flex flex-col p-10 md:p-16 gap-10 rounded-3xl">
        <slot name = "header">
            <p class="font bold text-3xl">This is a header card</p>
        </slot>
        <div class = "flex flex-row items-center">
           <p class="border-b flex-1"></p>
           <div class="rounded-full p-5 bg-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
           </div>
        </div>
        <slot name = "content">
            <p class = "This is the content of the card"></p>
        </slot>
    </div>
</template>
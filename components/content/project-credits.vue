<template>
    <div class="hidden lg:flex items-start mt-20">
        <div class="w-[55.0%] pl-4">

            <div class="grid grid-cols-2 gap-x-2 uppercase mt-3 leading-[1.3]">
                <div>
                    <h2 class="font-medium mb-3">CREDITS</h2>
                    <slot name="credits"></slot>
                </div>

                <div>
                    <h2 class="font-medium mb-3">PRESENTED AT</h2>
                    <slot name="presented-at"></slot>
                </div>
            </div>
        </div>
        <div class="w-[44.95%] mt-3">
            <div class="leading-[1.3]">
                <h2 class="font-medium mb-3 ">DOWNLOADS</h2>
                <slot name="downloads"></slot>
            </div>
        </div>
    </div>


    <div class="mt-8 lg:hidden text-black">
        <div class="w-full pl-2">

            <div class="grid gap-x-2 gap-y-4 uppercase leading-[1.3]">
                <div>
                    <h2 class="font-medium">CREDITS</h2>
                    <slot name="credits"></slot>
                </div>

                <div>
                    <h2 class="font-medium">PRESENTED AT</h2>
                    <slot name="presented-at"></slot>
                </div>
            </div>
        </div>
        <div class="w-full pl-2 mt-4">
            <h2 class="font-medium">DOWNLOADS</h2>

            <div class=" leading-[1.3]">
                <slot name="downloads"></slot>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

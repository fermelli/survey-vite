<script>
export default {
    name: 'Modal',
    props: {
        title: {
            type: String,
            required: true,
        },
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<template>
    <transition name="fade">
        <div v-if="isOpen" class="absolute top-0 left-0 z-10 grid place-content-center w-full h-screen bg-[#00000033]">
            <div class="modal w-[800px] bg-white rounded">
                <div class="p-4 border-b border-gray-300">
                    <h3 class="text-xl">{{ title }}</h3>
                </div>
                <div class="p-4">
                    <slot></slot>
                </div>
                <!-- <div class="flex justify-end p-4 border-t border-gray-300">
                    <button @click="$emit('close')" class="px-4 py-2 rounded bg-rose-600 text-white uppercase">
                        Cerrar
                    </button>
                </div> -->
            </div>
        </div>
    </transition>
</template>
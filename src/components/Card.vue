<template>
    <div class="card">
        <h5 class="card-title text-center">{{ title }}</h5>
        <p class="card-text">{{ shortText }}</p>

        <button 
            class="btn btn-outline-primary" 
            @click="setSelectedCard(id)"
        >
            Просмотреть
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        id: {
            type: Number
        },
        title: {
            type: String
        },
        text: {
            type: String
        }
    },
    computed: {
        shortText() {
            const str = this.text.substring(0, 71);
            if(this.text.length >= 70) {
                return str + '...'
            } 
            return str
        }
    },
    methods: {
        ...mapActions({
            setSelectedCard: 'cards/setSelectedCard'
        })
    }
}
</script>

<style lang="scss" scoped>
.card {
    height: 250px;
    margin-bottom: 30px;

    &-text {
        flex-grow: 1;
        overflow: hidden;
    }
}
</style>
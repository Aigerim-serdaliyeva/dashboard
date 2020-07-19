<template>
    <b-modal 
        :visible="Boolean(selectedCard)" 
        @change="setSelectedCard(null)"
        :hide-footer="true"
        centered
    >
        <template v-slot:modal-title class="text-center">
            Детали карточки
        </template>
        <div class="card" v-if="selectedCard">
            <h3 class="card-title text-center">{{ selectedCard.title }}</h3>
            <p class="card-text">{{ selectedCard.text }}</p>
        </div>
    </b-modal>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            selectedCard: 'cards/selectedCard'
        })
    },
    methods: {
        ...mapActions({
            setSelectedCard: 'cards/setSelectedCard'
        })
    }
}
</script>

<style lang="scss">
.modal-dialog {
    max-width: 700px;
}
</style>
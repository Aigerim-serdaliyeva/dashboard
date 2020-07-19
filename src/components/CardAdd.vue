<template>
    <div>
        <h1 class="page-title">Добавление карточки</h1>
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-10">
                <CardForm @save="onAddCard" @cancel="onCancel" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import CardForm from './CardForm.vue';
export default {
    components: { CardForm },
    methods: {
        ...mapActions({
            addCard: 'cards/addCard'
        }),
        onAddCard(card) {
            this.addCard(card)
            this.$router.push('/cards')
        },
        onCancel() {
            this.$router.push('/cards')
        }
    }
}
</script>
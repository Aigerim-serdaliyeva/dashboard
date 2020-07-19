<template>
    <div class="cards">
        <div class="mb-5 d-flex align-items-center">
            <router-link 
                :to="{path: '/cards/add'}" 
                tag="button" 
                class="btn btn-primary mr-3"
            >
                Добавить
            </router-link>

            <b-form-checkbox switch :checked="isCardDraggable" @change="setCardDraggable">Drag & Drop</b-form-checkbox>
        </div>

        <transition-group name="flip-list" tag="div" class="row">
            <div
                class="col-xl-3 col-lg-4 col-md-6"
                :class="{enter: index === toIndex}"
                v-for="(card, index) in cards"
                :key="card.id"
                :draggable="isCardDraggable"
                @dragenter="onEnter(index)"
                @dragover.prevent
                @drop="onDrop($event, index)"
                @dragend="onDragEnd"
                @dragstart="onDragStart(index)"
            >
                <Card 
                    :id="card.id"
                    :title="card.title"
                    :text="card.text"
                />
            </div>
        </transition-group>
    </div>
</template>

<script>

import Card from './Card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { Card },
    data() {
        return {
            toIndex: null,
            fromIndex: null
        }
    },
    computed: {
        ...mapGetters({
            cards: 'cards/cards',
            isCardDraggable: 'cards/isCardDraggable'
        })
    },
    methods: {
        ...mapActions({
            moveCard: 'cards/moveCard',
            setCardDraggable: 'cards/setCardDraggable'
        }),
        onDrop(ev) {
            if (this.fromIndex !== this.toIndex) {
                ev.preventDefault()
                this.moveCard({ fromIndex: this.fromIndex, toIndex: this.toIndex })
            }
        },
        onDragStart(index) {
            this.fromIndex = index
        },
        onEnter(index) {
            this.toIndex = index
        },
        onDragEnd() {
            this.toIndex = null
            this.fromIndex = null
        }
    }
}
</script>

<style lang="scss">
.enter .card {
    border-color: #333;
}
.flip-list-move {
  transition: transform 1s;
}
</style>
const ADD_CARD = "ADD_CARD"
const SET_SELECTED_CARD_ID = "SET_SELECTED_CARD_ID"
const MOVE_CARD = 'MOVE_CARD'
const SET_CARD_DRAGGABLE = 'SET_CARD_DRAGGABLE'

import initialCards from '../assets/json/cards.json'
if (!localStorage.getItem('cards')) {
    localStorage.setItem('cards', JSON.stringify(initialCards))
    localStorage.setItem('lastCardId', '2')
}

export const cards = {
    namespaced: true,

    state: {
        selectedCardId: null,
        isCardDraggable: true,
        cards: JSON.parse(localStorage.getItem('cards')),
        lastCardId: Number(localStorage.getItem('lastCardId'))
    },

    getters: {
        cards: ({ cards }) => cards,
        selectedCard: ({ cards, selectedCardId }) => selectedCardId && cards.find((c) => c.id === selectedCardId),
        isCardDraggable: ({ isCardDraggable }) => isCardDraggable
    },

    mutations: {
        [ADD_CARD](state, card) {
            state.lastCardId++
            state.cards.push({ ...card, id: state.lastCardId })
            localStorage.setItem('cards', JSON.stringify(state.cards))
            localStorage.setItem('lastCardId', state.lastCardId)
        },

        [SET_SELECTED_CARD_ID](state, id) {
            state.selectedCardId = id
        },

        [MOVE_CARD]({ cards }, { fromIndex, toIndex }) {
            cards.splice(toIndex, 0, cards.splice(fromIndex, 1)[0])
            localStorage.setItem('cards', JSON.stringify(cards))
        },

        [SET_CARD_DRAGGABLE](state, isDraggable) {
            state.isCardDraggable = isDraggable
        }
    },

    actions: {
        addCard({ commit }, card) {
            commit(ADD_CARD, card)
        },

        setSelectedCard({ commit }, id) {
            commit(SET_SELECTED_CARD_ID, id)
        },

        moveCard({ commit }, moveData) {
            commit(MOVE_CARD, moveData)
        },

        setCardDraggable({ commit }, isDraggable) {
            commit(SET_CARD_DRAGGABLE, isDraggable)
        }
    }
}
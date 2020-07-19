<template>
    <div>
        <h1 class="page-title">Карточки</h1>
        <CardsList />
        <CardDetails />
    </div>
</template>

<script>
import CardsList from './CardsList.vue';
import CardDetails from './CardDetails.vue';

export default {
    components: { CardsList, CardDetails }
}
</script>
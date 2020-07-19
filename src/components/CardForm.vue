<template>
    <div>
        <ValidationObserver ref="form">
            <form @submit.prevent="onSubmit">
                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    class="form-group"
                    tag="div"
                >
                    <label for="title">Заголовок</label>
                    <input
                        v-model="title"
                        type="text"
                        class="form-control"
                        placeholder="Заголовок"
                        :class="{invalid: errors.length > 0}"
                        id="title"
                    />
                    <span class="error-message">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                    v-slot="{ errors }"
                    rules="required|min:10"
                    class="form-group"
                    tag="div"
                >
                    <label for="text">Описание</label>
                    <textarea
                        v-model="text"
                        type="text"
                        class="form-control"
                        placeholder="Описание"
                        :class="{invalid: errors.length > 0}"
                        id="text"
                        rows="5"
                    />
                    <span class="error-message">{{ errors[0] }}</span>
                </ValidationProvider>

                <div class="d-flex align-items-center justify-content-between">
                    <button
                        type="reset"
                        class="btn btn-outline-secondary"
                        @click="$emit('cancel')"
                    >
                        Отмена
                    </button>

                    <button
                        type="submit"
                        class="btn btn-primary"
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>

export default {
    props: {
        initialTitle: {
            type: String,
            default: ''
        },
        initialText: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            title: this.initialTitle,
            text: this.initialText
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    return
                }
                const data = {
                    title: this.title,
                    text: this.text
                }
                this.$emit('save', data);
                this.title = this.text = '';

                this.$nextTick(() => {
                    if (this.$refs.form) {
                        this.$refs.form.reset();
                    }
                })
            })            
        }
    }
}
</script>

<style lang="scss">

</style>
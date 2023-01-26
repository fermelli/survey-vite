<script>
import ModalComponent from './components/ModalComponent.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import questions from './data/questions';

export default {
    name: 'App',
    components: {
        ModalComponent,
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            isOpen: true,
            isCorrect: false,
            isItVerified: false,
            questions: questions,
        };
    },
    methods: {
        nextQuestion(questionId) {
            if (this.isCorrect) {
                this.isItVerified = false;
                const questionIndex = this.questions.findIndex((question) => question.id === questionId);

                if (questionIndex !== -1) {

                    if (questionIndex === this.questions.length - 1) {
                        this.questions[0].is_open = true;
                    } else {
                        this.questions[questionIndex + 1].is_open = true;
                    }

                }

                this.questions[questionIndex].is_open = false;
            }
        },
        setIfCorrect(values, questionId) {
            const questionIndex = this.questions.findIndex((question) => question.id === questionId);

            if (questionIndex !== -1) {
                const answerIndex = this.questions[questionIndex].answers.findIndex((answer) => answer.id === values[`answer${questionId}`]);

                if (answerIndex !== -1) {
                    this.questions[questionIndex].selected_answer_id = values[`answer${questionId}`];
                    if (this.questions[questionIndex].answers[answerIndex].correct) {
                        this.isCorrect = true;
                    } else {
                        this.isCorrect = false;
                    }
                }
            }
        },
        verifyAnswer(values) {
            this.isItVerified = true;
        }
    },
    computed: {
        schema() {
            return (questionId) => {
                const schema = {};
                schema[`answer${questionId}`] = (value) => {
                    if (value) {
                        return true;
                    }

                    return 'Es requerido';
                }

                return schema;
            }
        },
    },
}
</script>

<template>
    <div class="container mx-auto">
        <ModalComponent v-for="question in questions" :key="question.id" title="Cuestionario"
            :is-open="question.is_open">
            <div>
                <h3 class="text-xl">{{ question.text }}</h3>

                <Form :validation-schema="schema(question.id)" @submit="verifyAnswer" v-slot="{ values }">
                    <label v-for="answer in question.answers" :key="answer.id"
                        class="block mt-2 py-1 px-2 hover:bg-gray-100"
                        :class="{ 'bg-lime-100': answer.correct && isItVerified, 'bg-rose-100': !answer.correct && isItVerified }"
                        :for="`${question.id}${answer.id}`">
                        <Field type="radio" :id="`${question.id}${answer.id}`" :value="answer.id" class="mr-2"
                            :name="`answer${question.id}`" @input="setIfCorrect(values, question.id)"
                            v-model="question.selected_answer_id" />
                        {{ answer.text }}
                    </label>

                    <div>
                        <ErrorMessage class="text-red-600" :name="`answer${question.id}`" />
                    </div>

                    <div class="flex justify-between">
                        <button :disabled="isItVerified"
                            class="px-4 py-2 mt-4 rounded bg-green-600 text-white uppercase disabled:bg-green-200 disabled:text-slate-500">
                            Comprobar
                        </button>

                        <button type="button" :disabled="!isCorrect || !isItVerified" @click="nextQuestion(question.id)"
                            class="px-4 py-2 mt-4 rounded bg-blue-600 text-white uppercase disabled:bg-blue-200 disabled:text-slate-500">
                            Siguiente
                        </button>
                    </div>
                </Form>
            </div>
        </ModalComponent>
    </div>
</template>

<style scoped>

</style>
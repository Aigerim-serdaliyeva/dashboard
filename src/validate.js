import { extend } from 'vee-validate';

import {
    required,
    min
} from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'Поле обязательно к заполнению'
});

extend('min', {
    ...min,
    message: 'Длина проверяемого поля должна быть не меньше {length} символов.'
});

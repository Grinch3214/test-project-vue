import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/packages/theme-chalk/lib/index.css'
import {
    Card,
    Form,
    Input,
    Button,
} from 'element-ui'

const elements = [
    Card,
    Form,
    Input,
    Button,
]

locale.use(lang)

elements.forEach(el => Vue.use(el, { locale }))
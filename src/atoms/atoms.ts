import { atom } from 'recoil'

// possibly refactor by giving splitting default obj into individual ataoms
export const calcState = atom({
    key: 'currentValue',
    default: {
        input: '',
        operator: '',
        result: ''
    }
})
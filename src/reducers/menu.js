export const initialState = {
    menu: [ 
        {
            name: 'Резюме',
            link: 'https://samara.hh.ru/resume/6d5a39ceff0544dc810039ed1f325579657057',
            id: 1
        },
        {
            name: 'Мой вк',
            link: 'https://vk.com/id181960073',
            id: 2
        },
         {
            name: 'GitHub',
            link: 'https://github.com/Kafkae',
            id: 3
        },
    ],
}
export function menuReducer(state = initialState) {
    return state
}

export const setIcon = ( obj ) => {
    switch ( obj.category ){
        case 'Home':
            obj.categoryIcon='fa-solid fa-house'
            break
        case 'Work':
            obj.categoryIcon='fa-solid fa-briefcase'
            break
        case 'Education':
            obj.categoryIcon='fa-solid fa-book'
            break
        case 'Family':
            obj.categoryIcon='fa-solid fa-people-roof'
            break
        case 'Personal':
            obj.categoryIcon='fa-solid fa-person'
            break
        case 'Fitness':
            obj.categoryIcon='fa-solid fa-dumbbell'
            break
        case 'Health':
            obj.categoryIcon='fa-solid fa-heart'
            break
        case 'Hobby':
            obj.categoryIcon='fa-solid fa-guitar'
            break
        case 'Car':
            obj.categoryIcon='fa-solid fa-car-side'
            break
        default:
            obj.categoryIcon = 'fa-solid fa-question'
    }
}
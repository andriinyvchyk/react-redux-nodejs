const categoryLoaded = (newCategory) => {
    return {
        type: 'CATEGORY_LOADED',
        payload: newCategory
    }
}

export {
    categoryLoaded
}
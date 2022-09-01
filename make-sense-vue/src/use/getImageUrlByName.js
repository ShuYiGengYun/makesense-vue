import { ref, unref } from 'vue'
const getImageUrl = (name) => {
    return new URL(`../assets/images/ico/${name}.png`, import.meta.url).href;
}

export function useGetImgUrl(lists) {
    const data = ref(null)
    const listsValue = unref(lists)
    data.value = lists.map(item => {
        return {
            ...item,
            imgSrc: getImageUrl(item.imgName),
        }
    })
    return data
}

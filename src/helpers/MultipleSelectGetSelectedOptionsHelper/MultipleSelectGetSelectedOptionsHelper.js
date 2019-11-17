export default function MultipleSelectGetSelectedOptionsHelper(e) {
    return [...e.target.options].filter(o => o.selected).map(o => o.value)
}

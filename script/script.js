const gold = document.querySelector('.gold')
const cssCode = document.querySelector('.code')
const rangeX = document.querySelector('#x')
const rangeY = document.querySelector('#y')
const rangeBlur = document.querySelector('#blur')
const rangeSpread = document.querySelector('#spread')
const rangeRadius = document.querySelector('#border')
const color = document.querySelector('#color')

cssCode.style.whiteSpace = 'pre'
const parameters = () => {
    gold.style.boxShadow = `${rangeX.value}px ${rangeY.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${color.value}`
    cssCode.textContent = `box-shadow ${rangeX.value}px ${rangeY.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${color.value} \n`
        + `webkit-box-shadow ${rangeX.value}px ${rangeY.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${color.value} \n`
        + `moz-box-shadow ${rangeX.value}px ${rangeY.value}px ${rangeBlur.value}px ${rangeSpread.value}px ${color.value}`
}
rangeX.addEventListener('input', parameters)
rangeY.addEventListener('input', parameters)
rangeBlur.addEventListener('input', parameters)
rangeSpread.addEventListener('input', parameters)
color.addEventListener('input', parameters)
rangeRadius.addEventListener('input', () =>{
    gold.style.borderRadius = `${rangeRadius.value}%`
})

export default function setFont(fontFamily) {
  console.log(fontFamily)
  const nyan = document.querySelectorAll('*')
  nyan.forEach(nya => {
    if (nya.tagName == 'SCRIPT') {

    } else {
      nya.style.fontFamily = fontFamily;
    }
  })
}
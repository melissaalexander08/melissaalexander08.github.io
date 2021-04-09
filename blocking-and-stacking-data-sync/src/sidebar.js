function showStatistics(selection) {
  clear()
  const statByType = calcByType(selection)
  getContainer().appendChild(createStatTable('by Type', 'Looks like the selection is empty.', statByType))
}

function clear() {
  const elements = getContainer().getElementsByClassName('stat-list__table')
  for (let i = 0; i < elements.length; i++) {
    elements.item(i).remove()
  }
}

function getContainer() {
  return document.getElementById('stat-container')
}

function createStatTable(title, emptyText, data) {
  const statView = document.createElement('div')
  statView.className = 'stat-list__table'

  const titleView = document.createElement('div')
  titleView.className = 'stat-list__title'
  titleView.innerHTML = `<span>${title}</span>`
  statView.appendChild(titleView)

  if (data.size === 0) {
    const emptyView = document.createElement('div')
    emptyView.className = 'stat-list__empty'
    emptyView.innerText = emptyText
    statView.appendChild(emptyView)
  } else {
    data.forEach((value, key) => {
      let itemView = document.createElement('div')
      itemView.className = 'stat-list__item'
      itemView.innerHTML =
        `<span class="stat-list__item-name">${key.toLowerCase()}</span>` +
        `<span class="stat-list__item-value">${value}</span>`
      statView.appendChild(itemView)
    })
  }
  return statView
}

function calcByType(widgets) {
  return countBy(widgets, (a) => a.text) // change to .text
}

function countBy(list, keyGetter) {
  const map = new Map()
  list.forEach((item) => {
    try {
      const key = keyGetter(item).replaceAll("<p>", "").replaceAll('"', '').split("</p>") // ["Yoga A", "1000"]
      const departmentSF = key[key.length - 1] === "" ? parseFloat(key[key.length - 2].replace(",","")) : parseFloat(key[key.length - 1].replace(",",""))
      const departmentName = key[key.length - 1] === "" ? key.slice(0,key.length - 2).join(" ") : key.slice(0,key.length - 1).join(" ")
      const count = map.get(departmentName)
      map.set(departmentName, !count ? 1 : count + 1)

      } catch (error) {
    console.error("Error caught in loop " + error);
      }
  })
  
  return new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
}

miro.onReady(() => {
  miro.addListener('SELECTION_UPDATED', (e) => {
    showStatistics(e.data)
  })
  miro.board.selection.get().then(showStatistics)
})

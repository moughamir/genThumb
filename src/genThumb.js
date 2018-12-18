import sketch, { DataSupplier } from 'sketch'

export function onStartup () {
  DataSupplier.registerDataSupplier('public.text', 'Titles', 'SupplyTitles')
  DataSupplier.registerDataSupplier('public.image', 'Background', 'SupplyImages')
  DataSupplier.registerDataSupplier('public.image', 'Icons', 'SupplyIcons')
}

export function onShutdown () {
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyTitles (context) {
  let dataKey = context.data.key
  let dataCount = context.data.requestedCount

  let Data = []
  let dataIndex = 0
  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, Data[dataIndex], dataIndex)
    dataIndex++
  }
}

export function onSupplyImages (context) {
  let sketch = context.api()
  let dataKey = context.data.key
  let pictureNames = []
  let arrayLength = pictureNames.length
  let paths = []
  for (let i = 0; i < arrayLength; i++) {
    paths.push(sketch.resourceNamed(pictureNames[i]).path())
  }
  DataSupplier.supplyData(dataKey, paths)
}
export function onSupplyIcons (context) {
  let sketch = context.api()
  let dataKey = context.data.key
  let iconNames = []
  let arrayLength = iconNames.length
  let paths = []
  for (let i = 0; i < arrayLength; i++) {
    paths.push(sketch.resourceNamed(iconNames[i]).path())
  }
  DataSupplier.supplyData(dataKey, paths)
}

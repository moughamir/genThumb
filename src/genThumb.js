import sketch from 'sketch'

const config = {
  frame: [750, 422],
  icon: 225,
  textContainer: [690, 85]
}
export default function onStartup () {
  console.log('Startup genThumb', config.frame[0])
  sketch.DataSupplier.registerDataSupplier('public.text', 'Titles', 'SupplyTitles')
  sketch.DataSupplier.registerDataSupplier('public.image', 'Background', 'SupplyImages')
  sketch.DataSupplier.registerDataSupplier('public.image', 'Icons', 'SupplyIcons')
}

export function onShutdown () {
  sketch.DataSupplier.deregisterDataSuppliers()
}

export function onSupplyTitles (context) {
  let dataKey = context.data.key
  let dataCount = context.data.requestedCount

  let Data = []
  let dataIndex = 0
  while (dataIndex < dataCount) {
    sketch.DataSupplier.supplyDataAtIndex(dataKey, Data[dataIndex], dataIndex)
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
  sketch.DataSupplier.supplyData(dataKey, paths)
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
  sketch.DataSupplier.supplyData(dataKey, paths)
}

import React, { Component } from 'react'

import InteractiveIranMap from 'iran-map'
// import 'iran-map/dist/index.css'
// import yourData from './yourData'
const yourData = {
  alborz: 250,
  ardebil: 20,
  azerbaijansharghi: 150,
  azerbaijangharbi: 0,
  bushehr: 0,
  chvab: 0,
  fars: 0,
  gilan: 0,
  golestan: 0,
  hamedan: 0,
  hormozgan: 0,
  ilam: 0,
  esfehan: 0,
  kerman: 0,
  kermanshah: 0,
  khorasanshomali: 0,
  khorasanrazavi: 0,
  khorasanjunubi: 0,
  khuzestan: 0,
  kvab: 0,
  kordestan: 0,
  lorestan: 0,
  markazi: 0,
  mazandaran: 0,
  ghazvin: 0,
  ghom: 0,
  semnan: 0,
  svab: 0,
  tehran: 0,
  yazd: 0,
  zanjan: 0,
  khazar: 0,
  khalijefars: 0,
  khark: 0,
  kish: 0,
  hormoz: 0,
  gheshm: 0,
  lark: 0,
  lavan: 0,
  faror: 0,
  hendorabi: 0,
  hengam: 0,
  siri: 0,
  abumusa: 0,
  tonbebozorg: 0,
  tonbekuchak: 0
}


export default class Example extends Component {
  render() {
    return (
      <InteractiveIranMap
        weight={600} // default value is 600px
        height={600} // default value is 600px
        selectedArea={'tehran'} // default value is tehran
        defaultAreasColor='120,160,51' // default value is '255,255,0'
        selectedAreaColor='#aaf' // default value is '#00f'
        selectedAreaTextColor='#fffff' // deafult value is '#fff'
        unselectedAreaTextColor='#dddd' // default value is '#000'
        backgroundColor='#ddd' // default value is '#fff'
        data={yourData} // default value for all areas is based on test data bleow as "yourData"
      />
    )
  }
}
export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data)
  }

  cleanData(data) {
    return data.forEach( item => {
      if (typeof item.Data !== 'number') {
        item.Data = 0;
      }
    })
  }

  roundData = data => parseFloat(data.toPrecision(3))

  formatData(data) {
    this.cleanData(data);
    return data.reduce((format, item) => {
      const location = item.Location.toUpperCase()

      format[location] = format[location] || {}

      const yearData = { [item.TimeFrame]: this.roundData(item.Data) }

      format[location] = {
        location,
        data: Object.assign({ ...format[location].data }, yearData),
        id: Date.now()
      }      

      return format
    }, {})
  }

  findByName(location = '') {
    const keys = Object.keys(this.data)
    const match = keys.find(key => key === location.toUpperCase());

    return this.data[match];
  }

  reduceData = array => {
    return array.reduce( (allData, key) => {
      allData.push(this.data[key])
      return allData
    }, [])
  }

  filterData = (array, search) => {
    return array.filter(
      item => item.location.includes(search.toUpperCase())
    )
  }

  findAllMatches(search = '') {
    const keys = Object.keys(this.data)
    const allDataArray = this.reduceData(keys)
    return this.filterData(allDataArray, search)
  }

  compareDistrictAverages(loc1, loc2) {
    const [avg1, avg2]  = [this.findAverage(loc1), this.findAverage(loc2)]
    const compared = this.roundData(avg1/avg2);

    return {
      [loc1.toUpperCase()]: avg1,
      [loc2.toUpperCase()]: avg2,
      "compared": compared
    }
  }

  calculateTotal = array => {
    return array.reduce((total, data) => {
      total += data;
      return total
    })
  }

  findAverage(location) {
    const { data } = this.findByName(location)
    const values = Object.values(data)
    const total = this.calculateTotal(values)
    const avg = total / values.length

    return this.roundData(avg)
  }
}

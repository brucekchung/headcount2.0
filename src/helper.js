export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data)
  }

  cleanData(data) {
    data.forEach( item => {
      if (typeof item.Data !== 'number') {
        item.Data = 0;
      }
    })

    return data;
  }

  roundData = (data) => parseFloat(data.toPrecision(3))

  formatData(data) {
    this.cleanData(data);
    return data.reduce((format, item) => {
      const location = item.Location.toUpperCase();
      
      if (!format[location]) {
        format[location] = {}
      }

      const yearData = {
        [item.TimeFrame]: this.roundData(item.Data) 
      }
      const data = Object.assign({ ...format[location].data }, yearData);
      const id = Date.now();

      format[location] = {
        location,
        data,
        id
      }      

      return format
    }, {})
  }

  findByName(location = '') {
    const keys = Object.keys(this.data)
    const match = keys.find(key => key === location.toUpperCase());

    return this.data[match];
  }

  findAllMatches(search = '') {
    const keys = Object.keys(this.data)
    const allDataArray = keys.reduce((allData, key) => {
      allData.push(this.data[key])
      return allData
    }, [])

    const allMatches = allDataArray.filter(
      item => item.location.includes(search.toUpperCase())
    )
    return allMatches
  }

  compareDistrictAverages(loc1, loc2) {
    const avg1 = this.findAverage(loc1)
    const avg2 = this.findAverage(loc2)
    const compared = this.roundData(avg1/avg2);

    return {
      [loc1.toUpperCase()]: avg1,
      [loc2.toUpperCase()]: avg2,
      "compared": compared
    }
  }

  findAverage(location) {
    const { data } = this.findByName(location)
    const total = Object.values(data).reduce((total, data) => {
      total += data;
      return total
    })
    const avg = total / Object.values(data).length

    return this.roundData(avg)
  }
}

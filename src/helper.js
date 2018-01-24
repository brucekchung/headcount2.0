export default class DistrictRepository {
  constructor(data) {
    this.data = this.formatData(data)
  }

  formatData(data) {
    return data.reduce((obj, item) => {
      const location = item.Location.toUpperCase();
      
      if (!obj[location]) {
        obj[location] = {}
      }

      if (typeof item.Data !== 'number') {
        item.Data = 0;
      }

      const yearData = {[item.TimeFrame]: parseFloat(item.Data.toPrecision(3))}

      obj[location].location = item.Location.toUpperCase();
      obj[location].data = 
        Object.assign({...obj[location].data}, yearData);
      obj[location].id = Date.now();

      return obj
    }, {})
  }

  findByName(location) {
    if(!location) {
      return undefined;
    }

    const keys = Object.keys(this.data)
    const match = keys.find(key => key === location.toUpperCase());

    return this.data[match];
  }

  findAllMatches(search) {
    const keys = Object.keys(this.data)
    const allDataArray = keys.reduce((arr, key) => {
      arr.push(this.data[key])
      return arr
    }, [])

    if(!search) {
      return allDataArray
    }

    const allMatches = allDataArray.filter(item => item.location.includes(search.toUpperCase()))
    return allMatches
  }

  compareDistrictAverages(loc1, loc2) {
    const avg1 = this.findAverage(loc1)
    const avg2 = this.findAverage(loc2)
    const compared = parseFloat((avg1/avg2).toPrecision(3))

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

    return parseFloat(avg.toPrecision(3))
  }
}

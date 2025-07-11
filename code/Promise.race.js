/** @format */

const race = (promise) => {
  return new Promise((resolve, reject) => {
    if (!promise || (promise && promise.length)) {
      return
    }
    for (let i = 0; i < promise.length; i++) {
      promise[i].then(resolve, reject)
    }
  })
}

let cleanTheRoom = () => {
  return new Promise((resolve, reject) => {
    resolve('Cleaned the room')
  })
}

let removeGarbage = (a) => {
  return new Promise((resolve, reject) => {
    resolve(a + ' Removed garbage')
  })
}

let winIcecream = (b) => {
  return new Promise((resolve, reject) => {
    resolve(b + ' Won icecream')
  })
}

cleanTheRoom()
  // .then( (a) => {
  //   return removeGarbage(a)
  // })
  // .then( (b) => {
  //   return winIcecream(b)
  // })
  .then( (c) => {
      console.log('finished ' + c)
    }
  )
  
// Uncomment to test and see what is logged
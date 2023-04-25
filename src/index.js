const solutions = document.getElementById('solutions')
const pre = document.createElement('PRE')

let total = 0
for (let i = 1000; i--; ) total += i % 3 === 0 || i % 5 === 0 ? i : 0

const pe001multiplesOf3or5 = `let total = 0
for (i = 1000; i--; ) total += i % 3 === 0 || i % 5 === 0 ? i : 0

// total: ${total}`

pre.innerHTML = pe001multiplesOf3or5
solutions.appendChild(pre)

// problem 2
let [a, b] = [1, 2]
let solution = 0
while (b <= 4000000) {
  solution += b % 2 === 0 ? b : 0
  const tmp = a
  ;[a, b] = [0 + b, tmp + b]
}

console.log('solution', solution)

// problem 3 ---- 486847\
/** testjpf
 * trying descending looping wont get bottom prome factors.
 *
 * do ascending but keep some logic like:::
 * if nis less than solution then BREAK
 *
 */
let n = 315
let solution3 = 0
for (let i = Math.floor(Math.sqrt(315)); i > 2; i -= 2) {
  let divisible = n % i === 0
  console.log('i', i)
  console.log('divisible', divisible)
  while (n % i === 0) {
    n /= i
    if (n < solution3) break
  }
  if (divisible === true && n > solution3) {
    console.log('n', n)
    console.log('solution3', solution3)
    solution3 = n + 0
  }
  divisible = false
}

console.log('solution 3:::', solution3)

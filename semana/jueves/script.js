const root = document.documentElement
const cubes = document.querySelector('.cubes')
const cube = `
<div class="cube">
  <div class="side top"></div>
  <div class="side bottom"></div>
  <div class="side left"></div>
  <div class="side right"></div>
  <div class="side front"></div>
  <div class="side back"></div>
</div>
`

const settings = {
  rx: -40,
  ry: 30,
  rz: 0
}

let simplex

init()
update(settings)

function init() {
  ;[
    ['seed', newNoise, update],
    ['unit', newUnit, update],
    ['dims', newDims, update],
    ['water', newWater, undefined],
    ['timex', undefined, update],
    ['timez', undefined, update],
    ['step', undefined, update],
  ].forEach(el => {
    const element = document.querySelector(`#${el[0]}`)
    const valEl = element.parentElement.querySelector('.val')

    const func = e => {
      settings[el[0]] = Number(element.value)
      if (valEl) valEl.innerHTML = element.value
      if (el[1]) el[1](settings)
      if (e && e.isTrusted && el[2]) el[2](settings) // call update when necessary
    }
    element.addEventListener('input', func)
    element.addEventListener('mousedown', e => { e.stopPropagation() })
    func()
  })
  setRotation(settings)
}

function generate(settings) {
  let tmp = ''
  for (let i = 0; i < Math.pow(settings.dims, 2); i++) {
    tmp += cube
  }
  cubes.innerHTML = tmp // call DOM once
}

function update(settings) {
  let z, x
  Array.from(cubes.querySelectorAll('.cube')).forEach((cube, index) => {
    z = (index % settings.dims)
    x = Math.floor(index / settings.dims)
    gsap.set(cube, {
      z: z * -settings.unit,
      x: x * settings.unit,
      '--height': `${(simplex.noise2D(x*settings.step + settings.timex / 100, z*settings.step + settings.timez / 100) + 1) * settings.unit}px`})
  })
}

function newNoise(settings) {
  simplex = new SimplexNoise(settings.seed)
}

function newUnit(settings) {
  gsap.set(root, {'--unit': settings.unit})
  gsap.set('.water', {'--height': `${settings.unit * settings.water}px`})
  gsap.set('.terrain, .water', {'--width': `${settings.unit * settings.dims}px`})
  gsap.set('.terrain', {'transform-origin': `${200 + settings.unit * settings.dims / 2}px 50px ${settings.unit * settings.dims / 2}px`})
}

function newWater(settings) {
  gsap.set('.water', {'--height': `${settings.unit * settings.water}px`})
}

function newDims(settings) {
  gsap.set('.terrain, .water', {'--width': `${settings.unit * settings.dims}px`})
  gsap.set('.terrain', {'transform-origin': `${200 + settings.unit * settings.dims / 2}px 50px ${settings.unit * settings.dims / 2}px`})
  generate(settings)
}

function debounce(func, wait) {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(callback, limit) {
  var waiting = false
  return function() {
    if (!waiting) {
      callback.apply(this, arguments)
      waiting = true
      setTimeout(function() {
        waiting = false
      }, limit)
    }
  }
}

function setRotation(settings) {
  gsap.set(root, { '--ry': settings.ry, '--rx': settings.rx, '--rz': settings.rz })
}

// Dragging
const terrain = document.querySelector('.terrain')
window.addEventListener('mousedown', e => {
  e.preventDefault()
  e.stopPropagation()

  let x = e.clientX
  let y = e.clientY

  const move = throttle(e => {
    let mx = e.clientX
    let my = e.clientY
    let dx = mx - x
    let dy = my - y
    x = mx
    y = my

    settings.ry += dx * 0.2
    settings.rx += dy * 0.2 * ((settings.ry > 90 && settings.ry < 270) ? 1 : -1) // fix antirotation
    settings.rx = (settings.rx + 360) % 360
    settings.ry = (settings.ry + 360) % 360
    setRotation(settings)
  }, 30)

  function removeListener(e) {
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', removeListener)
    window.removeEventListener('mouseleave', removeListener)
  }

  window.addEventListener('mousemove', move)
  window.addEventListener('mouseup', removeListener)
  window.addEventListener('mouseleave', removeListener)
})

const resetBtn = document.querySelector('#reset_rotation')
const resetIcon = resetBtn.querySelector('i')
let isSpinning = false

resetBtn.addEventListener('mousedown', e => { e.stopPropagation() })
resetBtn.addEventListener('click', () => {
  if (!isSpinning) {
    resetIcon.classList.add('fa-spin')
    isSpinning = true
  }

  settings.rx = -40
  settings.ry = 30
  settings.rz = 0
  setRotation(settings)

  setTimeout(() => {
    if (isSpinning) {
      resetIcon.classList.remove('fa-spin')
      isSpinning = false
    }
  }, 1000)
})
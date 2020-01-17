function loadMore(className, callback) {
  var totalHeight
  window.onload = function() {
    className = className || 'wrapper'
    var status = 0
    var wrapper = document.getElementsByClassName(className)[0]
    totalHeight = getStyle(wrapper)
    window.onscroll = function() {
      var pageHeight = window.screen.availHeight
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      var totalTop = pageHeight + scrollTop
      if (status) return
      if (totalTop >= totalHeight) {
        status = 1
        var odiv = document.createElement('div')
        odiv.className = 'add-loading'
        odiv.style.float = 'left'
        odiv.style.width = '100%'
        odiv.style.textAlign = 'center'
        odiv.innerHTML = '加载中...'
        wrapper.appendChild(odiv)
        setTimeout(() => {
          callback(() => {
            totalHeight = getStyle(wrapper)
            var child = wrapper.querySelector('.add-loading')
            wrapper.removeChild(child)
            status = 0
          })
        }, 1000)
      }
    }
  }
}
function getStyle(wrapper) {
  var wrapperStyle = getComputedStyle(wrapper, null)
  var wrapperStyle2 = wrapper.getBoundingClientRect()
  var wrapperResult = calculateStyle(wrapperStyle2, wrapperStyle)
  var totalHeight = wrapper.offsetTop + wrapperResult.height
  return totalHeight
}
function calculateStyle(style1, style2) {
  var width = +style1.width
  var height = +style1.height

  var padding = style2.padding.replace(/px/g, '')
  var pVal = padding.split(' ')
  width = width + checkVal(pVal).width
  height = height + checkVal(pVal).height

  var margin = style2.margin.replace(/px/g, '')
  var mVal = margin.split(' ')
  width = width + checkVal(mVal).width
  height = height + checkVal(mVal).height

  return { width, height }
}
function checkVal(val) {
  var width, height
  if (val.length == 1) {
    width = +val[0] * 2
    height = +val[0] * 2
  } else if (val.length == 2) {
    width = +val[1] * 2
    height = +val[0] * 2
  } else if (val.length == 3) {
    width = +val[1] * 2
    height = +val[0] + +val[2]
  } else if (val.length == 4) {
    width = +val[1] + +val[3]
    height = +val[0] + +val[2]
  }
  return { width, height }
}

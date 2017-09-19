var button = document.querySelector('#start')
var total = 3600*2
var countDown = false
button.addEventListener('click', function(){
    if(countDown === false){
        countDown = true
        timeid = setInterval(function(){
            if(total <= 0){
                clearInterval(timeid)
            }
            total = total - 1

            var hour = parseInt(total/3600, 10)
            var minute = parseInt((total - hour*3600)/60, 10)
            var second = total - hour*3600 - minute*60

            timeleft.innerText = hour + ':' + minute + ':' + second
        }, 1000)
        button.innerText = 'stop'
    }
    else{
        countDown = false
        clearInterval(timeid)
        button.innerText = 'start'
    }
})
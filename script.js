let x = $('div').on('click', function () {  
    $(this).toggleClass('active')
}).html('Проверка метода HTML')
.css( {fontSize: '80px',
        color: 'white',
        background: '#50ff99'
})

console.log(x);
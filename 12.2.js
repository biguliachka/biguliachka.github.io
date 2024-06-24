

document.querySelector('.box').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'purple';
    this.style.borderColor = 'goldenrod'
    this.style.color = 'blue'
    this.innerHTML = 'Давай пограємо в ігру! '

})
document.querySelector('.box').addEventListener('mousedown', function () {

    this.style.backgroundColor = 'black';
    this.style.borderColor = 'yellow'
    this.style.color = 'white'
    this.innerHTML =  'Тобі залишилось нажати 5 разів!'
    
    document.querySelector('.box').addEventListener('mousedown', function () {
       
        this.style.backgroundColor = 'black';
        this.style.borderColor = 'yellow'
        this.style.color = 'white'
        this.innerHTML =  'Тобі залишилось нажати 4 рази!'
        document.querySelector('.box').addEventListener('mousedown', function () {
       
            this.style.backgroundColor = 'black';
            this.style.borderColor = 'yellow'
            this.style.color = 'white'
            this.innerHTML =  'Тобі залишилось нажати 3 рази!'
            document.querySelector('.box').addEventListener('mousedown', function () {
       
                this.style.backgroundColor = 'black';
                this.style.borderColor = 'yellow'
                this.style.color = 'white'
                this.innerHTML =  'Тобі залишилось нажати 2 рази!'
                document.querySelector('.box').addEventListener('mousedown', function () {
       
                    this.style.backgroundColor = 'black';
                    this.style.borderColor = 'yellow'
                    this.style.color = 'white'
                    this.innerHTML =  'Тобі залишилось нажати 1 раз!'
                    
                })
                document.querySelector('.box').addEventListener('mousedown', function () {
                   
                  
                    this.style.backgroundColor = 'black';
                    this.style.borderColor = 'yellow'
                    this.style.color = 'white'
                    this.innerHTML =  'Щось не те! Спробуй ще раз!'
                    document.querySelector('.box').addEventListener('mousedown', function () {
                   
                  
                        this.style.backgroundImage  = `url(https://flomaster.top/uploads/posts/2023-01/1673634861_flomaster-club-p-risunok-karapuz-pinterest-2.jpg)`
                       this.style.backgroundSize = '400px'
                        this.style.borderColor = 'yellow'
                        this.style.color = 'red'
                        this.innerHTML =  'Ти скоро станеш тетою'
                        
                    })
                })
                
            })
        })
    })
})

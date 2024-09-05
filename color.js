function blackWhiteHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'black'){
        target.style.backgroundColor='black';
        target.style.color='white';
        self.value = 'white';

        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'white';
            i = i + 1;
        }
    }else{
        target.style.backgroundColor='white';
        target.style.color='black';
        self.value = 'black';
        
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'black';
            i = i + 1;
        }
    }
}
// hàm validator
function validator(options){
    // hàm thuc hiện validate
    function validate(inputElement, rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage = rule.text(inputElement.value);
        
        if (errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else{
            errorElement.innerText = ''; 
            inputElement.parentElement.classList.remove('invalid');
        }
    }
// lấy element cua form
    var formElement = document.querySelector(options.form);
    if (formElement){
// kiểm tra sumbit
        formElement.onsubmit = function (e) {
            e.preventDefault();
            options.rules.forEach (function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                validate(inputElement, rule);
            });

        }


        options.rules.forEach (function (rule) {
        var inputElement = formElement.querySelector(rule.selector);

        if (inputElement){
            // xữ lý trường hợp ao khỏi input
            inputElement.onblur = function(){
               validate(inputElement, rule);
            }
            // xữ lý mỗi khi người dùng nhập
            inputElement.oninput =function(){
                var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                errorElement.innerText = ''; 
                inputElement.parentElement.classList.remove('invalid');
            }

         }
       });
    }
}


// Dịnh nghĩa các rules
validator.isRequired = function (selector){
    return {
        selector: selector,
        text: function (value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    };
}
validator.isEmail = function (selector){
    return {
        selector: selector,
        text: function (value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined: 'Vui lòng nhập Email';
        }
    };
}
validator.isSdt = function (selector){
    return {
        selector: selector,
        text: function (value){
            var regex =/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
            return regex.test(value) ? undefined: 'vui lòng nhập số điện thoại';
            
        }
    };
}
validator.minLength = function (selector, min){
    return {
        selector: selector,
        text: function (value){
            return value.length >= min ? undefined: `Vui lòng nhập tối thiểu ${min} ký tự` ;
        }
    };
}
validator.isnhaplai = function (selector, getCoirmValue, message){
    return {
        selector: selector,
        text: function ( value){
            return value === getCoirmValue() ? undefined: message || 'Giá trị nhập vào ko chính xác';
        }
    }
}


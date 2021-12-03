import { getDefaultNormalizer, queryHelpers } from '@testing-library/dom';
import React, {useState} from 'react';
import {checkEmail,isNumber} from '../util/helpers';
import './styles.css'

const WorkJs = () => {
    const [firstValue,setFirstValue] = useState();
    const [secondValue,setSecondValue] = useState();
    const [result,setResult] = useState(0);
    const [priority,setPriority] = useState('1');
    const [isShowRequied,setIsShowRequied] = useState(false)
    const [emailString,setEmailString] = useState('');
    const [isShowMail,setIsShowMail] = useState(null)

    const handleCheckEmail = (e) => {
        setEmailString(e.target.value)
    }
    console.log(emailString)
    const handleClickButtonCheck = () => {      
     if (checkEmail(emailString)){
        setIsShowMail(true);
     }
     else {setIsShowMail(false)}
    }

    const abc = () => {
        let a = 1;
        return true;
        let b = 2;
    }
    // console.log('a')

    


    const handleFirstValue = (e) => {

        setFirstValue(e.target.value)
    }
    const handleSecondValue = (e) => {
        setSecondValue(e.target.value)
    }
    const handlePriorityChange = (e) => {
        setPriority(e.target.value)
        console.log(priority)
    }


    // let hung = 'abc@mail.com';
    // console.log(checkEmail(hung))

    // const hello = (str) => {
    //     let chao = 'xin chao'
    //     return chao + str;
    // }
    // console.log(hello('trieu'))


    // const test = () => {
    //     return true;
    // }
    // const total = (a,b) => {
    //     let newTotal = a + b;
    //     if (newTotal %2 == 0 ) return 'so chan'
    //     if (secondElement %2 !==0) return 'so le'
    // }
    // console.log(total(3,3))
    // const test = (inputNumber) => {
    //     if (inputNumber === 1) return 'a';
    //     if (inputNumber === 2) return 'b';
    // }
    // console.log(test(2))
     
    // const checkPriority = (a, b) => {
    //     if (priority === '1') {
    //         setResult(a + b);
    //     }
    //     else if (priority === '2') {
    //         setResult(a - b);
    //     }
    //     else if (priority === '3') {
    //         setResult(a * b);
    //     }
    // }
    const checkPriority = (a,b) => {
        switch (priority) {
            case '1': setResult(a + b)
            break;
            case '2': setResult(a - b)
            break;
            case '3': setResult(a * b)
            break;
        }
    }

    const handleFindResult = () => {      
        let firstElement = Number(firstValue);
        let secondElement = Number(secondValue);
        console.log(typeof firstElement);
        console.log(typeof secondElement)
        // Number, string, boolean, null, undefined, object

        if (isNumber(firstElement) === true && isNumber(secondElement) === true) {
            checkPriority(firstElement, secondElement);
        } else {
            setIsShowRequied(true);

        }
}  
// console.log(isShowRequied)

    
    //     if (firstElement && secondElement  === Number) {
    //     switch (priority) {
    //         case '1':
    //             setResult(firstElement + secondElement);
    //             break;
    //         case '2':
    //             setResult(firstElement - secondElement);
    //             break;
    //         case '3':
    //             setResult(firstElement * secondElement);
    //             break;        
    //     }
    // }} 
    
    
    return (
        <div>
            <div>First Number</div>
            <div><input value={firstValue} onChange={handleFirstValue}/></div>
            {isShowRequied && <p>Vui lòng điền số</p>}
            <div>Second Number</div>
            <div><input value={secondValue}  onChange={handleSecondValue}/></div>
            {isShowRequied && <p>Vui lòng điền số</p>}

            <div>
            <select
            name="priority"
            onChange={handlePriorityChange}
            value={priority}
          >
            <option value="1">Cộng</option>
            <option value="2">Trừ</option>
            <option value="3">Nhân</option>
          </select>
            </div>
            <div><button onClick={handleFindResult}>Ket qua</button></div>
            {result}
            <div>
                <input onChange={handleCheckEmail}/>
                <button value={emailString} onClick={handleClickButtonCheck}>Check</button>
            </div>
            <div>{isShowMail && <p>Day la Email</p>}
            <div>{!isShowMail && isShowMail != null && <p>Day khong la Email</p>}</div>
            </div>
        </div>
    )
    }

export default WorkJs;
function calculator(op)
{
    let input1 = document.querySelector("#num1").value;
    let input2 = document.querySelector("#num2").value;

    console.log(input1);
    console.log(input2);
    let ops=op;

    if(op=='add')
    {
        let res = parseInt(input1) + parseInt(input2);
        console.log(res);
        document.getElementById('res').innerHTML=`${res}`;
    }
    else if(op=='sub')
    {
        let res = parseInt(input1) - parseInt(input2);
        console.log(res);
        document.getElementById('res').innerHTML=`${res}`;
    }
    else if(op=='mul')
    {
        let res = parseInt(input1) * parseInt(input2);
        console.log(res);
        document.getElementById('res').innerHTML=`${res}`;
    }
    else if(op=='div')
    {
        let res = parseInt(input1) / parseInt(input2);
        console.log(res);
        document.getElementById('res').innerHTML=`${res}`;
    }
    else if(op=='mod')
    {
        let res = parseInt(input1) % parseInt(input2);
        console.log(res);
        document.getElementById('res').innerHTML=`${res}`;
    }
}
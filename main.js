document.open(alert("Hello!Roll the numbers"));

document.getElementById("btn").onclick = function roll(){
    let x = Math.floor(Math.random()*6)+1;
    let y = Math.floor(Math.random()*6)+1;
    let z = Math.floor(Math.random()*6)+1;
    document.getElementById("1").innerText = x;
    document.getElementById("2").innerText = y;
    document.getElementById("3").innerText = z;
    console.log(x, y, z)

        let a = parseInt(x + y + z);
        document.getElementById("4").innerText =  a;
        console.log(a)

        let b = parseInt(x - y - z);
        document.getElementById("5").innerText =  b;
        console.log(b)

        let c = parseInt(x * y * z);
        document.getElementById("6").innerText =  c;
        console.log(c)
    
}




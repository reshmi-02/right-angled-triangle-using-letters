let n=parseInt(prompt("Enter the number after 65"));

for(let i=65;i<=n;i++){
    for(let j=65;j<=i;j++){
        document.write(String.fromCharCode(j+" "));
    }
    document.write("<br>");
}
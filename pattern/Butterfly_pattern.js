
function upper(n){

    for(let row=1; row<=(n-1)/2; row++){
        let str=" ";
        let leftstar=row;
        for(let i=1; i<=leftstar; i++){
            str+="*";
        }
        let space=n-2*row;
        for(let j=1; j<=space; j++){
            str+=" ";
        }
        let rightstar=row;
        for(let k=1; k<=rightstar; k++){
            str+="*";
        }
        console.log(str);

    }
    
}
function middel(n){
    let str=" ";
    for(let k=1; k<=n; k++){
        str+="*";
    }
    console.log(str);
}
function lower(n){

    for(let row=1; row<=(n-1)/2; row++){
        let str=" ";
        let leftstar=((n-1)/2)-row+1;
        for(let i=1; i<=leftstar; i++){
            str+="*";
        }
        let space=2*row-1;
        for(let j=1; j<=space; j++){
            str+=" ";
        }
        let rightspace=((n-1)/2)-row+1;
        for(let k=1; k<=rightspace; k++){
            str+="*";
        }
        console.log(str);

    }
    
}
function pattern(n){
    upper(n);
    middel(n);
    lower(n);
}
pattern(7);
pattern(9);
pattern(5);
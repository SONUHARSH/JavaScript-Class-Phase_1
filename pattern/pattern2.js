
function pattern(n){

    for(let row=1; row<=n; row++){

        let str= " ";
        let space=n-row;

        for(let i=1; i<=space; i++){
            str+=" ";
        }
        for(let col=1; col<=row; col++){
            str+="*";
        }
        let stars=row-1;
        for(let j=1; j<=stars; j++){
            str+="*";
        }
        console.log(str);
    }

}

pattern(5);

pattern(7);
pattern(9);
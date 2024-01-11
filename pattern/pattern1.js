function pattern(n){

    for(let row=1; row<=n; row++){

        let str= " ";
        let space=n-row;

        for(let i=0; i<=space; i++){
            str+=" ";
        }
        for(let col=1; col<=row; col++){
            str+="*";
        }
        console.log(str);
    }

}
pattern(5);
pattern(7);
pattern(3);
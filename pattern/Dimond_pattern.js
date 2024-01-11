
function upperTrangle(n){

    for(let row=1; row<=n; row++){

        let str= " ";
        let space=n-row;

        for(let i=1; i<=space; i++){
            str+=" ";
        }
        let stars=2*row-1;
        for(let j=1; j<=stars; j++){
            str+="*";
        }
        console.log(str);
    }

}
function lowerTrangle(n){

    for(let row=1; row<=n-1; row++){

        let str= " ";
        let space=row;

        for(let i=1; i<=space; i++){
            str+=" ";
        }

        let stars=2*(n-row)-1;
        for(let j=1; j<=stars; j++){
            str+="*";
        }
        console.log(str);
    }

}
function pattern(n){
    upperTrangle(n);
    lowerTrangle(n);
}
pattern(5);





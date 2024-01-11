function pattern(n){

    for(let row=1; row<=n; row++){

        let str=" ";
        let space=n-row;
        for(let i=1; i<=space; i++) {
            str+=" ";
        }
        let count=1;
        for(let j=1; j<=row; j++){
            str+=count;
            count++;
        }
        let cnt=row-1;
        for(let k=1; k<=row-1; k++){
            str+=cnt;
            cnt--;
        }
        console.log(str);
    }
}
pattern(5);
pattern(4);
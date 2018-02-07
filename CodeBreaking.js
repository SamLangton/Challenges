function compress(string)
{
    var count = 0;
    var comp = "";
    var letter = string.charAt(0);
    for(x of string)
    {
        console.log(x);
        if(x == letter)
        {
            count++;
        }
        else{
            comp = comp + letter + count.toString();
            letter = x;
            console.log("Now using letter" + letter);
            count = 1;
        }
    }
    comp = comp + letter + count.toString();
    console.log(comp);
}

function decompress(string){
    var decomp = "";
    var counter = 1;
    for (x of string){
        if(counter % 2 != 0){
            var letter = x;
            counter++;
        }
        else{
            count = parseInt(x);
            var numcount = "";
            for (var i = 0; i < count; i++)
            {
                numcount = numcount + letter;
            }
            decomp = decomp + numcount;
            counter++;
        }
    }
    console.log(decomp);
}




var string = "a2b3c5a2";
decompress(string);

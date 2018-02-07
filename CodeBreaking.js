function compress(string)
{
    var count = 0;
    var comp = "";
    var letter = string.CharAt(0);
    for(x of string)
    {
        if(x == letter)
        {
            count++;
        }
        else{
            comp = comp + letter + count.toString();
            letter = x;
        }
    }
}
var string = "aabbbcccccaa";
compress(string);
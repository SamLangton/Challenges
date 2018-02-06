var names = [];
var childrenlist = [];
function findChildren(santasList, children) {
    
    for(b of children)
    {
       
        y = b.charAt(0).toUpperCase()+ b.substr(1);
        childrenlist.push(y);
    }
    for(x of childrenlist)
    {
        for(a of santasList)
        {
            if (names.indexOf(a)==-1)
            {
            if (x == a)
            {
                names.push(x);
            }
        }
        }
    }
    console.log(names);
  }
  let santasList = ["Tom","Errol","Sam", "mistyMay","Peter","Jennifer", "macMerphy"];
  let children = ["Errol", "Errol", "Peter", "jennifer", "mistymay", "MacMerphy"];

  findChildren(santasList, children);
var entry_state = [];
function add_entry(id)
{
    document.getElementById('entry_head').style.display = "";
    entry_state.push(id);
    var x = document.getElementById(id);
    x.style.display = "none";
    var z = document.getElementById('entry');
    var s = '<button type="button" class="btn ml-3 my-2 third" id = '+(id)+'>'+'process'+(id)+'</button>';
    z.innerHTML += s;
    console.log(z);
}

function lockvari()
{
    var n = document.getElementById('process').value;
    //added
    document.getElementById('added_head').innerHTML = "Added State:";
    var t = document.getElementById('added');
    document.getElementById('entry').innerHTML = "";
    document.getElementById('cs').innerHTML = "";
    document.getElementById('exit').innerHTML = "";
    t.innerHTML = "";
    for(var i = 0; i < n; i++)
    {
        var s = '<button type="button" class="btn ml-3 my-2 third" id = '+(i+1)+' onclick="add_entry(this.id)">'+'process'+(i+1)+'</button>';
        t.innerHTML += s;
    }
    //added part
}


function banker()
{
    var n = document.getElementById('process').value;
                  var re = document.getElementById('resource').value.split(" ");
                  var m = re.length;
                  var dummy = document.getElementById('max').value.split("\n");
                  var max = new Array(dummy.length);
                  for(var i = 0; i < dummy.length; i++)
                  {
                      max[i] = dummy[i].split(" ");
                  }
                  dummy = document.getElementById('allocated').value.split("\n");
                  var allocated = new Array(dummy.lenght);
                  for(var i = 0; i < dummy.length; i++)
                  {
                      allocated[i] = dummy[i].split(" ");
                  }

                  var need = new Array(n);
                  for(var i = 0; i < m; i++)
                  {
                      re[i] = parseInt(re[i]);
                  }
                  for(var i = 0; i < n; i++)
                  {
                      need[i] = new Array(m);
                      for(var j = 0; j < m; j++)
                      {
                          max[i][j] = parseInt(max[i][j]);
                          allocated[i][j] = parseInt(allocated[i][j]);
                          need[i][j] = max[i][j] - allocated[i][j];
                      }
                  }

                  var f = new Array(n);
                  var ans = new Array(n);
                  var track = 0;
                  for(var i = 0; i < n; i++)
                  {
                      f[i] = 0;
                      ans[i] = 0;
                  }
                for(var i = 0; i < n; i++)
                {
                      for(var j = 0; j < n; j++)
                      {
                         if(f[j] == 0)
                         {
                              var flag = 0;
                              for(var y = 0; y < m; y++)
                              {
                                  if(need[j][y] > re[y])
                                  {
                                      flag = 1;
                                      break;
                                  }
                              }
                              if(flag == 0)
                              {
                                  for(var y = 0; y < m; y++)
                                  {
                                      re[y]  = (+re[y]) + (+allocated[y][j]);
                                  }
                                  f[j] = 1;
                                  ans[track++] = j;
                              } 
                         }
                      }
                  }
                  document.getElementById('ans').innerHTML = ans;
}
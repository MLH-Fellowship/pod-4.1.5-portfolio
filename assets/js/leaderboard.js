const api_url =
  "https://api.github.com/repos/MLH-Fellowship/pod-4.1.5-portfolio/contributors";



// Ranking is done on the basis of amount of contributions made
// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  topContributors(data);
  
}

// Calling that async function
getapi(api_url);

var top_contributors = [];

function topContributors(data){
  for (let i=0; i<data.length; i++){
    top_contributors.push(data[i]["login"]);
    if (top_contributors.length == 5){
      break;
    }
  }

  if (top_contributors.length == 0){
    emptyTable();
  }
  else{
    top_contributors[0]+=" 👑 "
    createTable(top_contributors);
  }
}

function createTable(top_contributors) {
  let table = `<thead>
                <tr>
                    <th>Rank</th>
                    <th>Contributor</th>
                </tr>
            </thead>`;

  // Loop to access all rows
  for (let i = 0; i < top_contributors.length; i++) {
    table += `<tbody>
                <tr> 
                    <td><strong>${i + 1}</strong></td>
                    <td>${top_contributors[i]}</td>           
                </tr>
            </tbody>`;
  }

  document.getElementById("leaderboard").innerHTML = table;
}

function emptyTable(){
  alert("empty")
  let table = `<thead>
                <tr>
                    <th>Rank</th>
                    <th>Contributor</th>
                </tr>
            </thead>`;
  
      table += 
           
              `<tbody>
                  <tr>
                      <td colspan=2><center> Seems like the there are no contributors :( </center>
                      </td>
                  </tr>
                </tbody>`
          
                

  document.getElementById("leaderboard").innerHTML = table;
}




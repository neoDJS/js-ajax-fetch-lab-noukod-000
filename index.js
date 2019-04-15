function getIssues() {
  fetch('https://api.github.com/repos/neoDJS/javascript-fetch-lab/issues', {
    method: 'get',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showIssues(json));
}

function showIssues(json) {
  console.log(json);
  // $('#issues').html(json.map(issue => `<p><h4>${issue.title}</h4><br><p>${issue.body}</p></p>`).join());
}

function createIssue() {
  const repo = $('#forkedRepo').text();
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
  fetch('https://api.github.com/repos/'+repo+'/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Accept: 'application/vnd.github.symmetra-preview+json',
      Authorization: `token ${getToken()}`
    }
  })
  .then(getIssues());
}

function showResults(json) {
  console.log(json);
  $('#results').html(`<a id='forkedRepo' href='${json.html_url}'>${json.full_name}</a>`);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/'+repo+'/forks', {
    method: 'post',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

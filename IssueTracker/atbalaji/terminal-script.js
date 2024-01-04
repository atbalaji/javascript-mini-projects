class Issue {
  constructor(issue) {
    this._issueNo = issue.number;
    this._title = issue.title;
    this._state = issue.state;
    this._labels = issue.labels;
  }

  get issueNo() {
    return this._issueNo;
  }

  get title() {
    return this._title;
  }

  get state() {
    return this._state;
  }

  get labels() {
    return this._labels.map(label => label.name);
  }

}

const URL = 'https://api.github.com/repos/thinkswell/javascript-mini-projects/issues';

async function getIssues(url, filter = []){
  try {
    const response = await fetch(url);
    const json = await response.json();
    let issues = json.map(issue => new Issue(issue)).filter(issue => issue.state === 'open');

    if (filter.length > 0) {
      issues = issues.filter(issue => issue.labels.some(label => filter.includes(label)));
    }
    
    issues.forEach(issue => {
      console.log(`Issue ${issue.issueNo}: ${issue.title} | ${issue.state}`);
      console.log(issue.labels);
      console.log('---');
    });
  }
  catch(error){
    console.error(error);
  }
}

getIssues(URL, process.argv.slice(2));
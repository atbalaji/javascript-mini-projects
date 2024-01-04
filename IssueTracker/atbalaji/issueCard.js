export class IssueCard {
  constructor(issue) {
    this._issueNo = issue.issueNo;
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
    return this._labels;
  }

  getIssueCard() {
    const issueCard = document.createElement('div');
    const labelsText = this.labels.length > 0 ? this.labels.map(label => label.name).join(', ') : 'None';
    
    issueCard.classList.add('issue-card');
    issueCard.innerHTML = `
      <h3>${this.title}</h3>
      <p><strong>State:</strong> ${this.state}</p>
      <p><strong>Labels:</strong> ${labelsText}</p>
    `;

    return issueCard;
  }
}

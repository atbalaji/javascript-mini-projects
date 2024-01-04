import { IssueCard } from "./issueCard.js";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const populateIssueContainer = async () => {
  try {
    const username = 'thinkswell';
    const repository = 'javascript-mini-projects';
    const url = `https://api.github.com/repos/${username}/${repository}/issues`;

    const issues = await fetchData(url);

    const app = document.getElementById('app');
    const fragment = document.createDocumentFragment();

    issues.forEach(issue => fragment.appendChild(new IssueCard(issue).getIssueCard()));
    app.appendChild(fragment);
  } catch (error) {
    document.getElementById('app').innerText = "Error fetching issues";
  }
};

populateIssueContainer();

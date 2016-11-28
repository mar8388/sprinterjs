import axios from 'axios';
import store from '../store';
import { getMembersSuccess, deleteMemberSuccess, memberProfileSuccess } from '../actions/member-actions';

/**
 * Get all users
 */
export function getMembers() {
  return axios.get('http://localhost:3001/users')
    .then(response => {
      store.dispatch(getMembersSuccess(response.data));
      return response.parseJSON;
    });
}

/**
 * Search users
 */
export function searchMembers(query = '') {
  return axios.get('http://localhost:3001/users?q='+ query)
    .then(response => {
      store.dispatch(getMembersSuccess(response.data));
      return response;
    });
}

/**
 * Delete a user
 */
export function deleteMember(memberId) {
  return axios.delete('http://localhost:3001/users/' + memberId)
    .then(response => {
      store.dispatch(deleteMemberSuccess(memberId));
      return response;
    });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */
export function getProfile(memberId) {
  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};
  // Get the user data from our local database.
  return axios.get('http://localhost:3001/users/' + memberId)
    .then(response => {

      let member = response.data;
      profile.name = member.name;
      profile.twitter = member.twitter;
      profile.worksOn = member.worksOn;

      // Then use the github attribute from the previous request to
      // sent two XHR requests to GitHub's API. The first for their
      // general user info, and the second for their repos.
      return Promise.all([
        axios.get('https://api.github.com/users/' + member.github),
        axios.get('https://api.github.com/users/' + member.github + '/repos')
      ]).then(results => {

        let githubProfile = results[0].data;
        let githubRepos = results[1].data;

        profile.imageUrl = githubProfile.avatar_url;
        profile.repos = githubRepos;

        store.dispatch(memberProfileSuccess(profile));

        return;

      });

    });

}

import PAGE_CONTENT from './page_content';
import CANDIDATE_STATE from './candidate_state';
// eslint-disable-next-line
export const PAGE_CONTENT_OBJECT = {
  items: PAGE_CONTENT,
  itemPreview:null,
  itemView: null
};

export const CANDIDATE = {
  person_info : {
    name: CANDIDATE_STATE.name,
    surname: CANDIDATE_STATE.surname,
    email: CANDIDATE_STATE.email,
    role: CANDIDATE_STATE.role
  },
  person_about : {
    about_me: CANDIDATE_STATE.about_me,
    skills_sharp: CANDIDATE_STATE.skills_sharp,
    interested_roles: CANDIDATE_STATE.interested_roles,
    next_steps: CANDIDATE_STATE.next_steps,
    salary: CANDIDATE_STATE.salary
  },
  session_status: {
    isLoggingIn: CANDIDATE_STATE.isLoggingIn,
    isLoggedIn: CANDIDATE_STATE.isLoggedIn,
    isLoggingOut: CANDIDATE_STATE.isLoggingOut,
    isLoggedOut: CANDIDATE_STATE.isLoggedOut,
  }
}

export const PROFILE = {
  hasReceivedData: false,
  databaseSnapshot: {},
  isEdit: false,
  showBorder: false,
  isReadOnly: true,
  isUpdateFinished: false,
  aboutMeText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
  skillsSharpText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
  nextStepsText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
	name: 'John Doe'
}

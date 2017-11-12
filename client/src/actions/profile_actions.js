import { PROFILE_ACTIONS } from '../consts/action_types';

export const updateProfileState = (profileEmail) => ({
  type: PROFILE_ACTIONS.UPDATE_PROFILE,
  profileEmail
})

export const saveProfileUpdate = (summary) => ({
	type: PROFILE_ACTIONS.SAVE_PROFILE_UPDATE,
	summary
})
export const setNextStepsText = (text) => ({
  type: PROFILE_ACTIONS.SET_NEXT_STEPS_TEXT,
  text
})

export const setAboutMeText = (text) => ({
  type: PROFILE_ACTIONS.SET_ABOUT_ME_TEXT,
  text
})

export const setSkillsSharpText = (text) => ({
  type: PROFILE_ACTIONS.SET_SKILLS_SHARP_TEXT,
  text
})

export const isUpdateFinished = (predicate) => ({
  type: PROFILE_ACTIONS.UPDATE_FINISHED,
  predicate
})

export const editProfile = (predicate) => ({
  type: PROFILE_ACTIONS.EDIT_PROFILE,
  predicate
})

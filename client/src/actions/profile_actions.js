import { PROFILE_ACTIONS } from '../consts/action_types';

export const updateProfileState = (profileEmail) => ({
  type: PROFILE_ACTIONS.UPDATE_PROFILE,
  profileEmail
})

export const setNextSteps = (text) => ({
  type: PROFILE_ACTIONS.UPDATE_PROFILE,
  text
})

export const setAboutMeText = (text) => ({
  type: PROFILE_ACTIONS.UPDATE_PROFILE,
  text
})

export const setSkillsSharpText = (text) => ({
  type: PROFILE_ACTIONS.UPDATE_PROFILE,
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
